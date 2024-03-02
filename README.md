# 14 Model-View-Controller (MVC): Tech Blog

 Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app was built  from scratch and deploy it to Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


 ## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies)
- [Usage](#usage)
- [License](#license)
- [Questions?](#question)


## Description

This full-stack application was developed so that users could come create and interact with content regarding the tech industry. The application gives users a space to store created content via the dashboard page, comment on other users posts, as well as edit and delete their own posts. When arriving to the homepage, users will be able to see all current posts without needing an account, however will be directed to login or create an account when trying to access the dashboard, or in trying to create or view specific posts. User authentication via session storage and cookies is utilized in the application and offers a secure profile through specific routing and page protection. Users passwords are hashed through the bcrypt dependency before being entered into the MySQL database giving additional safeguards to users.

This project implements a model-view-control (MVC) specific set up, uses the object-relational-mapping (ORM) dependency Sequelize to connect the front-end code (UI) to the database, and Express routing. This project also utilizes handlebars templating engine which allowed data to be passed from the database and appended to the front-end in a DRY and simplified way.

Challenges faced when creating this application were the use of the handlebars template engine. This was my first time using one, and it took quite a bit of tinkering to find the best way to give certain partials access to the data I wanted to pass to the page. I also still struggle a bit with routing, and middleware in regards to the syntax used. This was the first full-stack web application I have built, so there was definitely a few times where I felt overwhelmed with the amount of files I was needing to comb through, however I eventually did get the feel for how all the different parts connected resulting in the completed application 

The user then can logout and end their session or a timeout exists on the session as well. 
   

## Installation

1. Clone the repo:

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for sequelize will be npm i sequelize
   - Command for mysql2 will be npm i mysql2
   - Command for express will be npm i express@4.18.2
   - Command for dotenv will be npm i dotenv
   - Command for nodemon will be npm i nodemon
   - Command for bcrypt will be npm i bcrypt
   - Command for bootstrap will be npm i bootstrap
   - Command for connect-session-sequelize will be npm i connect-session-sequelize
   - Command for express-handlebars will be npm i express-handlebars
   - Command for express-session will be npm i express-session

6. Next, you will need to make sure you have an added .env file within the root directory of your repository, within which you will pass your environmental variables specifying the database name, your MySQL username, and your MySQL password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected. (Note: there is a .env.EXAMPLE file, makesure rename it to .env and change the DB_USER='your sql username' and DB_PASSWORD='your password sql to login')

7. If you do not have a MySQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

8. Once all dependencies are installed, you will need to create the database. To do this you will need to navigate to the directory db directory containing the schema.sql file. Once there, you will need to open up a MySQL shell using the command mysql -u root -p, where you will then be prompted to enter you password. Once your password is entered you will be in the MySQL shell.

9. Once in the MySQL shell you will then run the command source schema.sql. This will create the database.

10. Once the database has been created, you will then need to seed the database (this will also create the model structure for the tables within the database). To do this, navigate to the root directory and run the command npm run seed. This needs to be done from the root directory because the .env file lives within the root.

11. Once the database has been seeded, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run watch to keep the server spun up between code edits.

12. From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program and make edits to both the front-end and back-end of the code base.


## DEMO

<img src="/Assets/1.gif"><br>

## Screenshots
![Screenshot1-week-14-challenge](./Assets/1st.jpg)

![Screenshot2-week-14-challenge](./Assets/2nd.jpg)

![Screenshot3-week-14-challenge](./Assets/3rd.jpg)


## Technologies

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MySQL, Sequelize (ORM), and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.31.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), nodemon (v2.0.22), bcrypt (v.5.1.0), bootstrap (v5.2.3), connect-session-sequelize(v.7.1.6), express-handlebars (v7.0.7), and express-session (v1.17.3). is installed for future unit testing. Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)



## Usage


* In order to run the application, click on the [Heroku-MVC-Tech-Blog](https://blog-tech-4ecff840e9a7.herokuapp.com/)
The following animation demonstrates the application functionality:

## License
[![License: MIT](https://img.shields.io/badge/license-MIT-red)](https://opensource.org/licenses/MIT)

SVG Logo Maker © is licensed under the ISC license.  

For more information regarding the SVG Logo Maker's license, please visit: 
https://opensource.org/licenses/MIT

  
## Questions?
  
### Github:[khoiphan-9194](https://github.com/khoiphan-9194)
  
### Reach Me Via Email: phanminhkhoi91@gmail.com

Thanks for viewing!

<img src="https://raw.githubusercontent.com/its-jefe/image-hosting/main/goal-pole.png" width="20%">
