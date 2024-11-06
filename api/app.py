import os
from flask import Flask, jsonify, request, json, abort, request
import hashlib
import psycopg2
from dotenv import load_dotenv
from scrape import scrape_billboard, save_items
from util import most_recent_tuesday

app = Flask(__name__)

load_dotenv() 

def verify_authentication():
    mode = os.environ.get('DEPLOY_MODE')

    if mode == 'dev':
        return True
    
    try: 
        secret = os.environ.get('SECRET_HASH')

        request_token = request.headers['Token']
        request_hash =  request.headers['Hash']

        hasher = hashlib.sha256()
        hasher.update(f'{request_token}{secret}'.encode('utf-8'))
        secret_hash = hasher.hexdigest()


        if secret_hash != request_hash:
            abort(403)
        else:
            return True
    except: 
        abort(403)

def get_db_connection():
    DB_CONNECTION_URL = os.environ.get('DB_CONNECTION_URL')
    conn = psycopg2.connect(DB_CONNECTION_URL)
    return conn

@app.route('/scrape')
def scrape():
    verify_authentication()
    list = scrape_billboard()
    save_items(list)
    return "Success", 200

@app.route('/get_all_entries')
def fetch_all():
    conn = get_db_connection()
    cur = conn.cursor()
    query = """
        SELECT *
        FROM song_rankings

    """
    cur.execute(query)
    results = []
    for row in cur:
        billboard_entry = {
            "position": row[0],
            "artist": row[1],
            "song_name": row[2],
            "position_last_week": row[4],
            "position_peak": row[5],
            "weeks_on_chart": row[6],
            "direction": row[7],
            "date": row[8],
        }
        results.append(billboard_entry)

    return jsonify(results)
    
@app.route('/chart')
def chart():
    last_tuesday_date = most_recent_tuesday()
    formatted_date = last_tuesday_date.strftime('%Y-%m-%d')
    conn = get_db_connection()
    cur = conn.cursor()
    query = """
        SELECT *
        FROM song_rankings
        WHERE date::date = %s;

    """
    cur.execute(query, (formatted_date,))
    results = []
    for row in cur:
        billboard_entry = {
            "position": row[0],
            "artist": row[1],
            "song_name": row[2],
            "position_last_week": row[4],
            "position_peak": row[5],
            "weeks_on_chart": row[6],
            "direction": row[7],
            "date": row[8],
        }
        results.append(billboard_entry)

    return jsonify(results)