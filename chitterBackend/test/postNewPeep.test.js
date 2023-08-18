import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';
const app = express()
import APP from '../App.js';

// main source of learning for this is from:
//https://github.com/digital-futures-academy/SE-2306-A-Demos/blob/main/FullStackEngineering/todoBackEnd/test/todo.js

import testData from './sampleData/testData.js';
import Peep from '../models/peep.model.js';

const testArray = testData.data;

chai.use(chaiHttp);

describe('post route testing', () => {
    const testServer = chai.request(APP).keepOpen();

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log('DB emptied')
        } catch (e) {
            console.log('error deleting from db')
        }
        try {
            await Peep.insertMany(testArray);
            console.log('testData inserted into db')
        } catch (e) {
            console.log('failure populating db')
        }
    })


    describe('/postPeep - post a Peeps', async () => {
        it('should post new peep to mongo', async () => {
            const result = await testServer.post('/postPeeps').send({
                userName: "testUserName",
                name: "testUser",
                peepContent: "test string in test"
            });

            expect(result.status).to.eql(200);
            //TODO: test for message back
            expect(await Peep.countDocuments({})).to.be.equal(testArray.length + 1);
        })

        //* This test made me correct my posting error handling
        it('should return 404 with incorrect informaton', async () => {
            const result = await testServer.post('/postPeeps').send({
                userName: "testUserName",
            });

            expect(result.status).to.eql(404);
            //TODO: test for message back
            expect(await Peep.countDocuments({})).to.be.equal(testArray.length);
        })


    })


})
