let Input = require('../lib/input');
let InputObj = new Input();
let minimist = require('minimist');
let supergoose = require('supergoose ');
let mongoose = require('mongoose');
let notesSchema = require('../models/notes-schame');



// mocking 
jest.mock('minimist');
minimist.mockImplementation(() => {

    return {
        anything: "this is for args[1] in input.js",
        add: 'Here is my noooooote yupeee'
    }


})



describe('input Model', () => {

    it('the action should not be empty', () => {
        let inputObj = new Input();
        expect(inputObj.IfAddEntered).not.toEqual("no action")
    })

    it('The action should be add or list or delete', () => {
        let inputObj = new Input();
        expect(inputObj.IfAddEntered).toEqual(true);
    })



})



jest.mock('supergoose ');
supergoose.mockImplementation(() => {
    return {
        anything: "this is for args[1] in input.js",
        add: 'Here is my noooooote yupeee'
    }
})

describe("database model", () => {
    let notes = new notesSchema({});

})