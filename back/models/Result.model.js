/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ResultSchema = new Schema({
    Departements : {type : Array, required : false},
    Candidates : [ {name : String, surname : String , E_mail : String, ScoreDep : { type : Map, of : Number }} ] ,
    sortedCandidates :  [ {name : String, surname : String , E_mail : String, ScoreDep : { type : Map, of : Number }} ] 
})

const Result = mongoose.model('Result',ResultSchema);

module.exports = Result;
*/