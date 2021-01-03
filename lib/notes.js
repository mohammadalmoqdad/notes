let noteCollection = require('../models/notes-collection');

class Note {
    constructor(obj) {
        this.execute(obj);
    }

    execute(obj) {

        let addRegex = /add/i
        let deleteRegex = /delete/i
        let listRegex = /list/i
        let updateRegex=/update/i


        if (addRegex.test(obj.action)) {
            this.add(obj);
        } else if (deleteRegex.test(obj.action)) {
            this.delete(obj);
        } else if (listRegex.test(obj.action)) {
            this.list(obj);
        }
        else if( updateRegex.test(obj.action)){
            this.update(obj);
        }
       


    }



    async add(obj) {
        return await noteCollection.create(obj);
    }

    async delete(obj) {
      return await noteCollection.delete(obj);
    }

    async list(obj) {
        return await noteCollection.read(obj);
    }
    async update(obj){
        return await noteCollection.update(obj);
    }
}





module.exports = Note;






