import pandas as pd

table = pd.read_csv('sentiment_table.csv')
table.to_json('SentimentTable.json', orient='records')

table = pd.read_csv('../photo-scrapper/mp_data/party_list.csv')
table.to_json('PartyList.json', orient='records')

table = pd.read_csv('../photo-scrapper/mp_data/mp_list.csv')
table.to_json('MPList.json', orient='records')