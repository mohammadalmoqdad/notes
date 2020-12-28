// the fixing of errors or un allowed values like something rathe than add

class Note {
    constructor(obj){
        this.execute(obj);
    }

    execute (obj) {
        let addRegex = /add/i
        if (addRegex.test(obj.action)) {
            this.add(obj);
        }
        else {
            console.log("Please enter add as an action")
        }
    }
    add (obj) {
        obj.id = Math.ceil(Math.random());
        console.log(`Note is : ${obj.paylod} \nid is : ${obj.id}`);
    }
}



module.exports = Note;






