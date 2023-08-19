import pandas as pd

table = pd.read_csv('sentiment_table.csv')
table.to_json('sentiment_table.json', orient='records')