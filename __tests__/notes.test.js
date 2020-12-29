'use strict';
const Note = require('../lib/notes');
jest.spyOn(global.console, 'log');



describe('Excute Module', () => {
    
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