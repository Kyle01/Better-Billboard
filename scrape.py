from bs4 import BeautifulSoup
import urllib.request

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

   billboard_entry = {
      "artist": item.h3.find_next('span').get_text().strip(),
      "song_name": item.h3.get_text().strip(),
      "position": pos,
      "position_last_week": pos_last_week,
      "position_peak": item.find_all('span')[3].get_text().strip(),
      "weeks_on_chart": item.find_all('span')[4].get_text().strip(),
      "direction": dir or pos_last_week
   }
   
   dir = None

   billboard_entries.append(billboard_entry)

print(billboard_entries)