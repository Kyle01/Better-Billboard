import os
import psycopg2
from dotenv import load_dotenv

load_dotenv() 

DB_CONNECTION_URL = os.environ.get('DB_CONNECTION_URL')
conn = psycopg2.connect(DB_CONNECTION_URL)

cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS song_rankings;')
cur.execute('CREATE TABLE song_rankings (id serial PRIMARY KEY,'
                                 'artist varchar,'
                                 'song_name varchar,'
                                 'position integer,'
                                 'position_last_week integer,'
                                 'position_peak integer,'
                                 'weeks_on_chart integer,'
                                 'direction varchar,'
                                 'date date);'
                                 )

cur.execute('CREATE INDEX ranking_date on song_rankings(date)')

conn.commit()

cur.close()
conn.close()