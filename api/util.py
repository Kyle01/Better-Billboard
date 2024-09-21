from datetime import datetime, timedelta

def most_recent_tuesday():
    day = datetime.today()
    while day.weekday() != 1:
        day = day - timedelta(days=1)
    
    return day