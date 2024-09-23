import requests
import hashlib
import os

URL = 'http://127.0.0.1:5000/scrape' # to change to production url
secret = 'secret' # to change to environment file
random_bytes = os.urandom(32)
hashed_token = hashlib.sha256(random_bytes).hexdigest()

hasher = hashlib.sha256()
hasher.update(f'{hashed_token}{secret}'.encode('utf-8'))
secret_hash = hasher.hexdigest()

headers = { "token": str(hashed_token), "hash": str(secret_hash) }

r = requests.get(URL, headers=headers)
print(r)