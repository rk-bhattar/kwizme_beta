This Folder contains two directory 

Backend and Frontend

(a) Setup Process for Project -

For Backend:

Run npm i in the directory
-- It will install node_modules in the Folder.

( Above command is only for first time setup )

Run command -  node server.js 
-- It will start the server.
By default it runs on http://localhost:3000


For Angular Frontend: 

Run command - npm i in the directory
-- It will install node_modules in the Folder.
( Above command is only for first time setup )


Run command - ng serve
It will serve the angular project.
By default it runs on http://localhost:4200

(b) Code Detail of Backend -

In Backend There is one file server.js which contains server side code.
you can change openai api key there in the const openaiKey variable. 


(c) Code Detail of Frontend -

In Frontend there is src folder  which contains all frontend code.

In app , It consist of five folder quiz,registration,result,shared/header,shared/footer.

In each folder there is .html file in which you can change the relevant static texts.

For changes in header and footer , you can go to shared folder which contains both header and footer and inside that
you can do changes in .html files.

for image replacement, all images are there in asset frontend/src/assets folder

