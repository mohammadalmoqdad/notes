'use strict';
const Note = require('../lib/notes');

require('@code-fellows/supergoose');

let noteCollection = require('../models/notes-collection');


jest.spyOn(global.console, 'log');



describe('Notes Module', () => {

    it('Command should not be empty!', () => {
        const noteObj = new Note({ paylod: "this is my creative Noooote", action: "" });
        noteObj.execute({ paylod: "this is my creative Noooote", action: "" });
        expect(console.log).not.toHaveBeenCalled();
    })




    it('Command and data should be valid', () => {
        const noteObj = new Note({ paylod: "this is my creative Noooote", action: "add" });
        noteObj.execute({ paylod: "this is my creative Noooote", action: "add" })
        expect(console.log).toHaveBeenCalled();
    })





})

describe('Notes actions Model', () => {


    it('can create() a new note', () => {
        let obj = { action: 'add', paylod: "my test note", category: ' Running Test' };
        return noteCollection.create(obj).then(result => {
            console.log("result : ", result)
            Object.keys(obj).forEach(key => {
                expect(result[key]).toEqual(obj[key]);
            });
        });
    })

    it("THe note is no longer in database after deletion", ()=>{
        let obj = { action: 'add', paylod: "my test note", category: ' Running Test' };
        noteCollection.create(obj).then(result => {
        let obj = { action: 'add', id: `${result._id}` };
         noteCollection.delete(obj).then(res=>{
             let checkDeletedObj  = {action: "list", id: obj.id}
           return noteCollection.read(checkDeletedObj).then(res=>{
               expect(res).not.toEqual(true);
           })
            })
        })
    })

})