This project is a collection of APIs using fastify backend and Next JS front end
with mysql database to register students to tutors and retrieve this information. 
These APIs demonstrate CRUD features in MVC format

It as developed and tested in Ubuntu 20.04, other platforms may have some issues

**To start the project:**

`git clone` this project and `cd` to the downloaded directory

Install node dependencies as mentioned in package.json using `npm install`

create a database for this application in your mysql database
and store the database connection details in .env file in the parent directory as 

'''

PORT = 3000

DB_HOST = localhost

DB_DATABASE = Your db Name

DB_NAME = your db user name

DB_PASSWORD = your db password

DB_PORT = 3000

'''

Load the pave.sql into the database selected for this application

After the dependencies and database are installed, 
the server can be started using `node app.js` for production or 
`nodemon app.js` for development

The APIs can be accessed as mentioned in `pave_exam.pdf`

The backend APIs can also be tested using postman collection at: 
'https://www.getpostman.com/collections/c27e947e5e4b54432b42'

The front end API can be tested at http://localhost:3000/form, 
which shows a simple input to enter tutor email, updates the table with students 
registered under given tutor email


**Note:** the next module takes time to load initially and might go over the default
fastify load time limit. Just restart the app again and it should work.

**Note:** if there is an error saying the port is already in use, 
in linux, you can kill the port using following commands

`lsof -i tcp:3000`
this results in the processes actively using the port. 
Note the pid of the node process 
use `kill -9 {pid}` (replace pid with the previously noted pid) and kill the process
You can check if the process is killed by using `lsof -i tcp:3000` again


**Future Work:**
- extend the collection to multiple databases
- add relevant models using sequelize
- update API1 for identifying and loading individual teachers and multiple tutors
- style update for frontend API
- break controllers to relevant classes
