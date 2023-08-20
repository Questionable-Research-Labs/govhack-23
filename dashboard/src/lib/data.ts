import SentimentTable from "./compliedData/SentimentTable.json";
import PartyList from "./compliedData/PartyList.json";
import MPList from "./compliedData/MPList.json";

export { default as SentimentTable } from "./compliedData/SentimentTable.json";

// Name,URL
// RNZ,https://www.rnz.co.nz 
// Newsroom,https://www.newsroom.co.nz
// 1News,https://www.1news.co.nz
// Stuff NZ,https://www.stuff.co.nz
// NZ Herald,https://www.nzherald.co.nz
// Newshub,https://www.newshub.co.nz

export enum NewsOrg {
    RNZ = "RNZ",
    Newsroom = "Newsroom",
    OneNews = "1News",
    Stuff = "Stuff NZ",
    NZHerald = "NZ Herald",
    Newshub = "Newshub"
}

export interface NewsOrgMetadata {
    name: NewsOrg;
    url: string;
    slug: string;
}

export const newsOrgData: {[key in NewsOrg]: NewsOrgMetadata} = {
    [NewsOrg.RNZ]: {
        name: NewsOrg.RNZ,
        url: "https://www.rnz.co.nz",
        slug: "rnz"
    },
    [NewsOrg.Newsroom]: {
        name: NewsOrg.Newsroom,
        url: "https://www.newsroom.co.nz",
        slug: "newsroom"
    },
    [NewsOrg.OneNews]: {
        name: NewsOrg.OneNews,
        url: "https://www.1news.co.nz",
        slug: "1news"
    },
    [NewsOrg.Stuff]: {
        name: NewsOrg.Stuff,
        url: "https://www.stuff.co.nz",
        slug: "stuff"
    },
    [NewsOrg.NZHerald]: {
        name: NewsOrg.NZHerald,
        url: "https://www.nzherald.co.nz",
        slug: "nzherald"
    },
    [NewsOrg.Newshub]: {
        name: NewsOrg.Newshub,
        url: "https://www.newshub.co.nz",
        slug: "newshub"
    }
}

export interface NewsOrgSentiments {
    org: NewsOrg;
    partyTotalSentiment: {
        [party: string]: number;
    }
    leftRightLean: number;
}

export function findNewsOrgRows(newsOrg: NewsOrg) {
    return SentimentTable.filter(row => row.org_name === newsOrg);
}

export function getMPData(mpName: string) {
    return MPList.find(mp => mp.Name === mpName);
}

export function GetPartyData(partyName: string) {
    console.log(PartyList, partyName)
    return PartyList.find(party => party.Party === partyName);
}

export function calculateNewsOrgMetadata(newsOrg: NewsOrg): NewsOrgSentiments {
    let rows = findNewsOrgRows(newsOrg);
    let partyTotalSentiment: {
        [party: string]: number;
    } = {};
    let partyTotalCount: {
        [party: string]: number;
    } = {};
    for (let row of rows) {
        let party = getMPData(row["mp_name"])?.Party as NewsOrg;
        if (partyTotalSentiment[party] === undefined) {
            partyTotalSentiment[party] = 0;
            partyTotalCount[party] = 0;
        }
        partyTotalSentiment[party] += row["sentiment"] || 0;
        partyTotalCount[party] +=1;
    }

    let leftRightLean = 0;
    for (let party in partyTotalSentiment) {
        console.log(party, partyTotalSentiment[party] / partyTotalCount[party])
        leftRightLean += (partyTotalSentiment[party] / partyTotalCount[party]) * (GetPartyData(party)?.["Right/Left"]);
    }
    // console.log(newsOrg,partyTotalSentiment, leftRightLean)
    return {
        org: newsOrg,
        partyTotalSentiment,
        leftRightLean
    }
}