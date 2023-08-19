import pandas as pd

table = pd.read_csv('sentiment_table.csv')
table.to_json('sentiment_table.json', orient='records')

table = pd.read_csv('../photo-scrapper/mp_data/party_list.csv')
table.to_json('party_list.json', orient='records')

table = pd.read_csv('../photo-scrapper/mp_data/mp_list.csv')
table.to_json('mp_list.json', orient='records')