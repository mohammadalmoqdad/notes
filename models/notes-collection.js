
const noteSchema = require('./notes-schame');

class Note {
    constructor() {

    }



    async create(obj) {
        try {
            let record = new noteSchema(obj);
            let result = await record.save();
            console.log(`note saved This is fun`)

        }
        catch (e) {
            console.log(e)
        }
    }






    async read(obj) {

        if (obj['category'] === true && !obj["id"]) {
            try {
                let allNotes = await noteSchema.find({});
                allNotes.forEach(element => {
                    console.log(`${element.paylod} \n Category : ${element.category} \n -------------------------------------`)
                });


            }
            catch (e) {
                console.log(e)
            }
        }
        else if (typeof obj['category'] == "string" && !obj['id']) {
            let allNotes = await noteSchema.find({ category: obj.category });
            allNotes.forEach(element => {
                console.log(`${element.paylod} \n Category : ${element.category} \n -------------------------------------`)
            });
        }
        else if (typeof obj['id'] == "string" && obj["id"]) {
            let oneNote = await noteSchema.find({ _id: obj.id });
            console.log(oneNote)
            console.log(`${oneNote[0].paylod} \n Category : ${oneNote[0].category} \n -------------------------------------`)
            if (oneNote) return true;
            else return false;
        }
    }






    async update(obj) {
        console.log(obj.id, obj.paylod)
        let newNote = await noteSchema.findByIdAndUpdate(obj.id, { paylod: obj.paylod }, { new: true });
        console.log(`my new note is : ${newNote}`);
    }






    async delete(obj) {
        try {
            let id = await noteSchema.findByIdAndDelete({ _id: obj.id });
            console.log(`Deleted Note with ID : ${id}`);
            return obj.id;
        }
        catch (e) {
            console.log(e);
        }
    }

}

module.exports = new Note();