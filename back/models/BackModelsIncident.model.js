const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BackModelsIncidentSchema = new Schema({
    type : { type : String, required : true } ,
    
},
{ timestamps : true } 
) ;

const BackModelsIncident = mongoose.model('Incident', BackModelsIncidentSchema);

module.exports = BackModelsIncident ;