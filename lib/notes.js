// the fixing of errors or un allowed values like something rathe than add

function Note(obj) {
    this.execute(obj);
}





Note.prototype.execute = function (obj) {
    let addRegex = /add/i
    if (addRegex.test(obj.action)) {
        this.add(obj);
    }
    else {
        console.log("Please enter add as an action")
    }
}





Note.prototype.add = function (obj) {
    obj.id = Math.ceil(Math.random());
    console.log(`Note is : ${obj.paylod} \nid is : ${obj.id}`);
}

module.exports = Note;