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

describe('route testing', () => {
    const testServer = chai.request(APP).keepOpen();

    beforeEach(async () => {
        try {
            await Peep.deleteMany();
            console.log('DB emptied')
        } catch (e) {
            console.log('error deleting from db')
        }
        try {
            //todo: this is not working
            await Peep.insertMany(testArray);
            console.log('testData inserted into db')
        } catch (e) {
            console.log('failure populating db')
        }
    })

    describe('/ - getting all Peeps', async () => {
        it('should ', async () => {
            const result = await testServer.get('/').send();

            expect(result).to.have.status(200);
            expect(result.body).to.be.an('array');
            console.log(result.body)
            expect(result.body.length).to.equal(testArray.length);
        })


    })


})
