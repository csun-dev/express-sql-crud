# Requirements
1. NodeJS LTS version and up (2024.2.21)
2. MySQL (Can use any SQL database)
3. dbmate (npm package in global) - Database management Package

# How to Run
1. npm install (Will install the requirement packages)
2. Crete .env file and setup env variables (use the .env.sample for details)
3. npm run (Run server)

# API Documents
> Create restaurant : http://127.0.0.1:8000 (POST), input data: { name, location, category }
 
> Read restaurants : http://127.0.0.1:8000 (GET)

> Delete restaurant : http://127.0.0.1:8000/restaurant_id (DELETE)

> Update restaurant : http://127.0.0.1:8000/restaurant_id (DELETE), input data (Optional): { name, location, category }
