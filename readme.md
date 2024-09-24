# Overview
To complete

# Implementation Details 
## Backend 
Backend is written in Python and is a Flask App Deployed on Vercel 

## Cron 
Cron a Python written AWS Lambda Function with an AWS scheduled cron event every Tuesday (32 5 ? * 3 * ). The CRON hits the backend and tell it to perform the scrape amd save it to the database. 

# Getting Started Guide
## Backend 
1. Ensure you have python installed using `$ python --version`. The project supports Python 3.12.4
2. Clone the Project `$ git clone https://github.com/Kyle01/Better-Billboard.git` 
3. Change directory to the backend `$ cd api`
4. Create a new virtual environment using `$ python -m .venv` 
5. Change directory to the bin of the virtual environment `$ cd .venv/bin/`
6. Start the virtual environment `$ source activate` 
7. Change directory back to the api folder with `$ cd ../.. ` 
8. Install the requirements `pip in`stall -r requirements.txt`
9. Start the flask server with `flask --debug run`
10. Server will be running on http://127.0.0.1:5000

To do 
1. spin up the frontend 
2. tidy it up 