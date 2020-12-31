const mongoose =require ('mongoose');
let notes = mongoose.Schema({ //if S is not capita; it won't work

    paylod : {type : String , required : true},
    category : {type : String }

})
module.exports=mongoose.model('notes',notes)