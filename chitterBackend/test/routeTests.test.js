import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';
const app = express()
import APP from '../App.js';

// main source of learning for this is from:
//https://github.com/digital-futures-academy/SE-2306-A-Demos/blob/main/FullStackEngineering/todoBackEnd/test/todo.js

import testData from './sampleData/testData.js';
import testUsers from './sampleData/testUsers.js';
import Peep from '../models/peep.model.js';
import User from '../models/user.model.js';


const testArray = testData.data;
const userTestArray = testUsers.data;

chai.use(chaiHttp);

describe('get route testing', () => {
    const testServer = chai.request(APP).keepOpen();

    beforeEach(async () => {
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
    })


    //* GET PEEPS ROUTE
    describe('/ - getting all Peeps', async () => {
        it('should get all peeps', async () => {
            const result = await testServer.get('/').send();

            expect(result).to.have.status(200);
            expect(result.body).to.be.an('array');
            expect(result.body.length).to.equal(testArray.length);
        })


    })

    //* POST PEEPS ROUTE
    //!note to self =  result.text will give the message - not in result.body
    describe('/postPeep - post a Peeps', async () => {
        it('should post new peep to mongo', async () => {
            const result = await testServer.post('/postPeeps').send({
                userName: "testUserName",
                name: "testUser",
                peepContent: "test string in test"
            });

            expect(result.status).to.eql(200);
            expect(result.text).to.equal("peep added successfully");
            expect(await Peep.countDocuments({})).to.be.equal(testArray.length + 1);
        })

        //* This test made me correct my posting error handling
        it('should return 404 with incorrect informaton', async () => {
            const result = await testServer.post('/postPeeps').send({
                userName: "testUserName",
            });

            expect(result.status).to.eql(404);
            expect(result.text).to.equal("adding peep failed");
            expect(await Peep.countDocuments({})).to.be.equal(testArray.length);
        })


    })

    describe('/signup - testing sign up', async () => {
        it('should return 200 and Users should be one user bigger ', async () => {
            const result = await testServer.post('/signup').send({
                "name": "signUpTest",
                "userName": "signUpTestUser",
                "userEmail": "signUpTest@email.com",
                "password": "password7"
            })

            expect(result.status).to.eql(200);
            expect(result.text).to.equal('sign up successful')
            expect(await User.countDocuments({})).to.be.equal(userTestArray.length + 1);
        })

        //! SORT THIS TEST OUT
        //TODO: this test, whilst passing, spews out the mongo validation error I'm trying to test - even in a try/catch
        it('should not add new user if information is incorrect', async () => {
            const result = await testServer.post('/signup').send({
                "name": "signUpTest",
                "userName": "signUpTestUser",
                "password": "password7"
            })
            expect(await User.countDocuments({})).to.be.equal(userTestArray.length);
        })

        it('should not add new user if user exists', async () => {
            const result = await testServer.post('/signup').send({
                "name": "testName1",
                "userName": "testUserName1",
                "userEmail": "testEmai1l@email.com",
                "password": "password1"
            })

            expect(result.status).to.eql(500);
            expect(result.text).to.eql('username or email in use');
            expect(await User.countDocuments({})).to.be.equal(userTestArray.length);
        })

        it('should only allow valid emails', async () => {
            const result = await testServer.post('/signup').send({
                "name": "testName1",
                "userName": "testUserName1",
                "userEmail": "notAnEmail",
                "password": "password1"
            })
            expect(result.status).to.eql(500);

            expect(result.text).to.equal('username or email in use')
            expect(await User.countDocuments({})).to.be.equal(userTestArray.length);
        })


    })

    describe('/login', () => {
        it('should return 200 with correct details', async () => {
            const result = await testServer.post('/login').send({
                "userEmail": "testEmai1l@email.com",
                "password": "password1"
            })

            //* https://www.chaijs.com/api/bdd/#method_keys
            //* parse as JSON as, my understanding, it receives JSON with keys in quotes where as the assertion doesn't looking for quotes
            expect(result.status).to.eql(200)
            expect(JSON.parse(result.text)).to.have.all.keys('name', 'userName')
        })

        it('should return 404 without correct details', async () => {
            const result = await testServer.post('/login').send({
                "userEmail": "invalidEMail@email.com",
                "password": "notARealPassword"
            });

            expect(result.status).to.equal(404);
            expect(result.text).to.equal('information is incorrect');
        })

    })


})
