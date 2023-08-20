import User from "./models/user.model.js";
import Peep from "./models/peep.model.js";
import mongoose from "mongoose";


const chitterDevLink = 'mongodb://127.0.0.1:27017/chitterDev';
const dbConnect = async () => {
    console.log('connecting to db');
    await mongoose.connect(chitterDevLink); //TODO: maybe add timeout stuff here
    console.log('connected to db')
}

dbConnect().catch(err => console.log(err));


const testData = {
    "data": [
        {
            "userName": "scrabbleMan1000",
            "name": "John",
            "peepContent": "I just scored using oxyphenbutazone on https://github.com/alx-askw/pre-academy-scrabble-challenge",
            "peepReplies": [
                {
                    "userName": "scrabbleMan1001",
                    "peepContent": "Ha! You're still playing that old scrabble ... get a on a proper game at https://github.com/alx-askw/scrabble-challenge-java",
                }
            ],
            "__v": 0
        },
        {
            "userName": "DFAirlines",
            "name": "Digital-Futures-Air",
            "peepContent": "Book cheap flights to exotic destinations at https://github.com/alx-askw/airport-challenge",
            "peepReplies": [],
            "__v": 0
        },
        {
            "userName": "DFBank",
            "name": "Digital-Futures-Banking",
            "peepContent": "Safe Banking | Low Interest Loans at https://github.com/alx-askw/bank-challenge",
            "peepReplies": [],
            "__v": 0
        },
        {
            "userName": "DFGaz",
            "name": "DF-Gazette",
            "peepContent": "Concise. All your news in one place: https://github.com/alx-askw/news-summary-challenge",
            "peepReplies": [],
            "__v": 0
        },
        {
            "userName": "rps",
            "name": "DF-RPS",
            "peepContent": "You and your peers bored at work? Try https://github.com/alx-askw/rock-paper-scissors-challenge",
            "peepReplies": [],
            "__v": 0
        },
        {
            "userName": "chitterDev",
            "name": "DFChitter",
            "peepContent": "Welcome to Chitter - Keep if SFW and safe :)",
            "peepReplies": [
                {
                    "userName": "chitterDev",
                    "peepContent": "chitter link: https://github.com/alx-askw/chitter-challenge",
                },
                {
                    "userName": "AlexA",
                    "peepContent": "Welcome!!",
                }
            ],
            "__v": 0
        },

    ]

};


const testUsers = {
    "data": [
        {
            "name": "John",
            "userName": "scrabbleMan1000",
            "userEmail": "scrabb1000@email.com",
            "password": "password1"
        },
        {
            "name": "Joe",
            "userName": "scrabbleMan1001",
            "userEmail": "scrabb1001@email.com",
            "password": "password2"
        },
        {
            "name": "Digital-Futures-Air",
            "userName": "DFAirlines",
            "userEmail": "dfair@email.com",
            "password": "password3"
        },
        {
            "name": "Digital-Futures-Banking",
            "userName": "DFBank",
            "userEmail": "dfbank@email.com",
            "password": "password4"
        },
        {
            "name": "DF-Gazette",
            "userName": "DFGaz",
            "userEmail": "dfgaz@email.com",
            "password": "password5"
        },
        {
            "name": "DF-RPS",
            "userName": "rps",
            "userEmail": "rps@email.com",
            "password": "password6"
        },
        {
            "name": "DFChitter",
            "userName": "chitterDev",
            "userEmail": "chitterdev@email.com",
            "password": "password7"
        },
        {
            "name": "Alex",
            "userName": "AlexA",
            "userEmail": "alex@email.com",
            "password": "password8"
        },

    ]

};

const testArray = testData.data;
const userTestArray = testUsers.data;

const populatingForShowcase = async () => {

    try {
        await Peep.deleteMany();
        // console.log('peep DB emptied');
        await User.deleteMany();
        // console.log('user DB emptied')
    } catch (e) {
        console.log('error deleting from db')
    }
    try {
        await Peep.insertMany(testArray);
        // console.log('testData inserted into db')
        await User.insertMany(userTestArray);
        // console.log('user test data inserted into db');
    } catch (e) {
        console.log('failure populating db')
    }
    await mongoose.connection.close()
}

populatingForShowcase();
