
# Handlebars Tech Blog

A simple website that works a little like a forum for users, allowing you to logon make posts and comment on other users posts.


## Screenshots

![Screenshot 2022-05-05 221622](https://user-images.githubusercontent.com/46641259/166921363-9f35784c-ce55-46c4-a1aa-4b8e29634a89.png)


## Demo

https://handlebars-techblog.herokuapp.com/signup?

signup here to test out make comments or posts for others to see.

alternatively you can deploy this yourself at [Deployment](#deployment)




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

