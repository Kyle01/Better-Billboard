from bs4 import BeautifulSoup
import urllib.request
import os
import psycopg2
from dotenv import load_dotenv
from datetime import date



def scrape_billboard():
   billboard_entries = []

   BILLBOARD_WEBSITE = "https://www.billboard.com/charts/hot-100/"
   with urllib.request.urlopen(BILLBOARD_WEBSITE) as response:
      soup = BeautifulSoup(response.read(), 'html.parser')

   items = soup.select(".o-chart-results-list-row-container")
   for idx, item in enumerate(items):
      circles = item.find_all('circle')
      if len(circles) > 0 and circles[0].has_attr('fill'):
         circle_color = circles[0]['fill']
         if circle_color == '#448118':
            dir = 'up'
         elif circle_color == '#b91b20':
            dir = 'down'
         else:
            dir = 'horizontal'
      pos = str(idx + 1)
      pos_last_week = item.find_all('span')[2].get_text().strip()
      if pos_last_week == 'RE-\nENTRY':
         pos_last_week = 'RE ENTRY' 
      

      if pos_last_week == 'NEW' or pos_last_week == 'RE ENTRY':
         position_peak = pos
      else: 
         position_peak = item.find_all('span')[3].get_text().strip()


      billboard_entry = {
         "artist": item.h3.find_next('span').get_text().strip().replace("'", "''"),
         "song_name": item.h3.get_text().strip().replace("'", "''"),
         "position": pos,
         "position_last_week": pos_last_week,
         "position_peak": position_peak,
         "weeks_on_chart": item.find_all('span')[4].get_text().strip(),
         "direction": dir or pos_last_week
      }
      
      dir = None

      billboard_entries.append(billboard_entry)
   
   return billboard_entries

def save_items(list):
   load_dotenv() 
   DB_CONNECTION_URL = os.environ.get('DB_CONNECTION_URL')
   conn = psycopg2.connect(DB_CONNECTION_URL)

   cur = conn.cursor()
   for song in list:
      cur.execute(f"INSERT INTO song_rankings (artist, song_name, position, position_last_Week, position_peak, weeks_on_chart, direction, date) VALUES ('{song['artist']}', '{song['song_name']}', '{song['position']}', '{song['position_last_week']}', '{song['position_peak']}', '{song['weeks_on_chart']}', '{song['direction']}', '{date.today()}');")
      conn.commit()
