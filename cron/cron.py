import hashlib
import os
import requests

def lambda_handler(event, context):
    URL = 'https://better-billboard.onrender.com/scrape'
    secret = os.environ['secret']
    random_bytes = os.urandom(32)
    hashed_token = hashlib.sha256(random_bytes).hexdigest()
    
    hasher = hashlib.sha256()
    hasher.update(f'{hashed_token}{secret}'.encode('utf-8'))
    secret_hash = hasher.hexdigest()
    
    headers = { "token": str(hashed_token), "hash": str(secret_hash) }
    
    response = requests.get(URL, headers=headers)

    return {
        'statusCode': response.status_code,
        'body': response.content
    }
