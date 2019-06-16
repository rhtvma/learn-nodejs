# learn-nodejs

Tag Nmae - initial-routes-setup

1. CRUD operation with mysql
2. Config the Routes on nodejs server
3. Set the global config data like mysql credentials or other


#CRUD Operation URL - 

1. Get all users 
GET - http://localhost:3000/api/users/getUsers
2. Create User (name, email, phone)
POST - http://localhost:3000/api/users/createUser     
3. Update user (id)
PUT - http://localhost:3000/api/users/updateUser/3
4. Delete User (id)
DELETE - http://localhost:3000/api/users/deleteUser/1


#Get the ICC World Cup 2019 Points Table Data - https://www.cricbuzz.com/cricket-series/2697/icc-cricket-world-cup-2019/points-table

1. Get the table points data - We have scrap the HTML data and convert into array then shown these data on page using "jade template" engine.
http://localhost:3000/api/cricket/allmatches


