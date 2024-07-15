from bs4 import BeautifulSoup
import urllib.request

billboard_entries = []

BILLBOARD_WEBSITE = "https://www.billboard.com/charts/hot-100/"
with urllib.request.urlopen(BILLBOARD_WEBSITE) as response:
   soup = BeautifulSoup(response.read(), 'html.parser')
# tester_site = './helper.html'
# with open('./helper.html') as fp:
#     soup = BeautifulSoup(fp, 'html.parser')
    

items = soup.select(".o-chart-results-list-row-container")
for idx, item in enumerate(items):
   pos = str(idx + 1)
   billboard_entry = {
      "artist": item.h3.find_next('span').get_text().strip(),
      "song_name": item.h3.get_text().strip(),
      "position": pos,
      "position_last_week": item.find_all('span')[2].get_text().strip(),
      "position_peak": item.find_all('span')[3].get_text().strip(),
      "weeks_on_chart": item.find_all('span')[4].get_text().strip(),
      "direction": 'up'
   }

   billboard_entries.append(billboard_entry)

print(billboard_entries)