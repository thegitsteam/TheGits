Graffiti Incident Tracking System

CS 532 Project - Fall 2015

To install the project, navigate to a local directory of your choice, and run the commands:

    git clone https://github.com/thegitsteam/TheGits.git
    cd TheGits

To install dependencies:
    npm install

Before setting up the database, make sure that you have MongoDB installed. This link will give better instructions than I can: https://docs.mongodb.org/manual/installation/.

Once you have MongoDB installed, run "mongod" in the command line to turn on MongoDB. Leave it running in its terminal window for the duration of your development activities. In another terminal, run "mongod" to run a program that allows you to interact with the database. The database we're using is named "TheGits", so run "use TheGits" to create and and allow the app to begin using that db.

Finally, visit the wiki on Taiga to grab the API Keys, and follow the instructions there to finish up.



Writing new features:
1. Always pull from master first to get the most up-to-date code
    git pull origin master

2. Create a feature branch
    git checkout -b name-of-branch

3. Write new code

4. Commit your changes. In industry, you prefix your commit message with the related user-story number.
    git commit -m "<user-story number>: Did some things"

5. Push your code to GitHub. It's important to push to the same branch that you are developing on. DO NOT push to origin master
    git push origin name-of-branch

6. Create a pull request so that the team can review your code and merge it into master