
# Handlebars Tech Blog

A simple website that works a little like a forum for users, allowing you to logon make posts and comment on other users posts.


## Screenshots

![tech blog](https://user-images.githubusercontent.com/46641259/174478090-edbd4071-ec82-4466-bdde-c9d4168d1324.png)
![logon page](https://user-images.githubusercontent.com/46641259/174478093-ac7f8996-cd06-4dec-a3a1-c94c6ff0da85.png)



## Demo

https://handlebars-techblog.herokuapp.com/signup?

signup here to test out make comments or posts for others to see.

alternatively you can deploy this yourself at [Deployment](#deployment)



https://user-images.githubusercontent.com/46641259/174478097-207cd162-9180-4407-92fe-febfa2a8ac01.mp4




## License

[MIT](https://choosealicense.com/licenses/mit/)


## Installation

Install my-project with node package manager

```bash
    git clone https://github.com/jamesthomasbester/Handlebars_Tech_Blog
    cd ~/Handlebars_Tech_Blog
    npm install
```
Mysql is a requirment to persistantly store data.
https://www.mysql.com/downloads/

I am using envronment variables that you will have to configure to point to your own sql server which are:

username: process.env.DATABASE_USER,
password: process.env.DATABASE_PASS,
database: process.env.DATABASE_NAME,

## MYSQL

To Create the database in SQL open a sql commandline session

```bash
  SOURCE <PATH TO : db\schema.sql>
```
Finally to start the service
```bash
  npm start
```



## Acknowledgements

 - [Monash University](https://www.monash.edu/) as this is a unit homework.
 



## Feedback

If you have any feedback, please reach out to us at jamesthomasbester@gmail.com

