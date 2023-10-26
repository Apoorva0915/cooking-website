const mongoose=require("mongoose");

const reicpeSchema=new mongoose.Schema({
name:{
    type:String,
    required:"this field is required"
},
description:{
    type:String,
    required:"this field is required"
},
email:{
    type:String,
    required:"this field is required"
},
ingredients:{
    type:Array,
    required:"this field is required"
},
category:{
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian','Spanish'],
    required:"this field is required"
},
Image:{
    type:String,
    required:"this field is required"
},

});

reicpeSchema.index({name:"text",description:"text"})
// wildcart indexing
// reicpeSchema.index({"$**":"text"});

module.exports=mongoose.model("recipe",reicpeSchema);