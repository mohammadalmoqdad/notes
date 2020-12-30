
let notes = require('../models/notes-schame'); // I have to save data in database to show it.

class Note {
    constructor(obj) {
        this.execute(obj);
    }

    execute(obj) {

        let addRegex = /add/i
        let deleteRegex = /delete/i
        let listRegex = /list/i


        if (addRegex.test(obj.action)) {
            this.add(obj);
        } else if (deleteRegex.test(obj.action)) {
            this.delete(obj);
        } else if (listRegex.test(obj.action)) {
            this.list(obj);
        }
        else {
            console.error("Please enter allowed action")
        }


    }



    async add(obj) {
        try {
            let record = new notes(obj);             // I added it here not above to avoid require the Input.js
            let result = await record.save();
            console.log(`note saved This is fun`)

        }
        catch (e) {
            console.log(e)
        }
    }

    async delete(obj) {
        try {
            await notes.deleteOne({ _id: obj.id });
            console.log(`Deleted Note with ID : ${obj.id}`);
        }
        catch (e) {
            console.log(error);
        }
    }

    async list(obj) {
        console.log(obj, "i aaaaam object in note.js")
        if (obj['category'] === true) {
            try {
                let allNotes = await notes.find({});
                allNotes.forEach(element => {
                    console.log(`${element.paylod} \n Category : ${element.category} \n -------------------------------------`)
                });
               
            }
            catch (e) {
                console.log(e)
            }
        }
        else if (typeof obj['category'] == "string") {
            let allNotes = await notes.find({category : obj.category});
            allNotes.forEach(element => {
                console.log(`${element.paylod} \n Category : ${element.category} \n -------------------------------------`)
            });
        }
    }
}





module.exports = Note;






