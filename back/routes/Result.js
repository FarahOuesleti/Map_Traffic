/*
const Router = require('express').Router();
let Result = require('back\models\Result.model.js');

Router.route('/').get((req,res)=>{ 
    Result.find()
    .then(ResultatFinal => {res.json(ResultatFinal)})
    .catch(err => {res.status(400).json('ERROR : ' + err)}) ;
})

Router.route('/add').post((req,res)=> {
    const Departements = req.body.Departements ;
    
   

    NewResult = new Result({Departements,Candidates,sortedCandidates});
    NewResult.save()
    .then(()=> res.json('Result added successfully'))
    .catch(err => {res.status(400).json('ERROR : ' + err)});
}) ;

module.exports = Router ;
*/