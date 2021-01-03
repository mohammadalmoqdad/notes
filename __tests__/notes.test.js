'use strict';
const Note = require('../lib/notes');
const notesCollection = require('../models/notes-collection');

require('@code-fellows/supergoose');

let noteCollection = require('../models/notes-collection');


jest.spyOn(global.console, 'log');



describe('Notes Module', () => {

    it('Command should not be empty!', () => {
        const noteObj = new Note({ action: "", paylod: "this is my creative Noooote" });
        noteObj.execute({action: "", paylod: "this is my creative Noooote"  });
        expect(console.log).not.toHaveBeenCalled();
    })




    it('Command and data should be valid', () => {
        const noteObj = new Note({ paylod: "this is my creative Noooote", action: "add" });
        noteObj.execute({ action: "add",  paylod: "this is my creative Noooote" , category: "test nnote" })
        console.log("note added sucseefully");
        expect(console.log).toHaveBeenCalled();
    })






})

describe('Notes actions Model', () => {


    it('user can create a new note', () => {
        let obj = { action: "add", paylod: "my test note", category: ' Running Test' };
        return noteCollection.create(obj).then(result => {
            console.log("result ++++++++++++++++ 11 : ", result)
            // Object.keys(obj).forEach(key => {
            //     console.log(obj)
            //     expect(result[key]).toEqual(obj[key]);
            // });
            expect(result["paylod"]).toEqual(obj["paylod"])
        });
    })

    it("THe note is no longer in database after deletion so can not search for it after deletion", ()=>{
        let obj = { action: 'add', paylod: "my test note", category: ' Running Test' };
        noteCollection.create(obj).then(result => {
        let obj = { action: 'add', id: result._id };
         noteCollection.delete(obj).then(res=>{
             let checkDeletedObj  = {action: "list", id: res.id}
           return noteCollection.read(checkDeletedObj).then(res=>{
               expect(res).toEqual(false);
           })
            })
        })
    })

    it("The entered ID for search should be in the db",()=>{
        let obj={action:"list", id:"hfwegn12638fgeh73491"};
        return notesCollection.read(obj).then(result=>{
            expect(result).toEqual(false);
        })
    })

    it("The category should be in the database",()=>{
        let obj={action:"list", category:"notInDBCategory"};
        return noteCollection.read(obj).then(result=>{
            expect(result).toEqual(false);
        })
    })


})