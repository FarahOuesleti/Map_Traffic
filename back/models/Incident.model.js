const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const IncidentSchema = new Schema({
    Name : { type : String, required : true } ,
    Location : { type : String, required : true },
    Longitude : { type : String, required : true },
    Latitude : { type : Number, required : true },
    Date : { type : Date, required : false }
},
{ timestamps : true } 
) ;

const Incident = mongoose.model('Incident', IncidentSchema);

module.exports = Incident ;