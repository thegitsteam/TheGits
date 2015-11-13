Graffiti Incident Tracking System

CS 532 Project - Fall 2015

To install the project, navigate to a local directory of your choice, and run the commands:

    git clone https://github.com/thegitsteam/TheGits.git
    cd TheGits

To install dependencies:
    npm install

Before setting up the database, make sure that you have MongoDB installed. This link will give better instructions than I can: https://docs.mongodb.org/manual/installation/.

Once you have MongoDB installed, run "mongo" in the command line to turn on MongoDB. Leave it running in its terminal window for the duration of your development activities. In another terminal, run "mongodb" to run a program that allows you to interact with the database. The database we're using is named "TheGits", so run "use TheGits" to create and and allow the app to begin using that db.

Finally, visit the wiki on Taiga to grab the API Keys, and follow the instructions there to finish up.