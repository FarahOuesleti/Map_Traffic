const Router = require('express').Router();
let Incidents = require('back\models\Incident.model.js');

Router.route('/').get((req,res)=>{ 
    Incidents.find()
    .then(Incident => {res.json(Incidentss)})
    .catch(err => {res.status(400).json('ERROR : ' + err)}) ;
})

Router.route('/add').post((req,res)=> {
    const Name = req.body.Name ;
    const Location = req.body.Location ;
    const Longitude = req.body.Longitude ;
    const Latitude = req.body.Latitude ;
    const Date = Date.parse(req.body.Date) ;  

    NewIncident = new Incident({Name ,Location , Longitude , Latitude , Date});
    NewIncident.save()
    .then(()=> res.json('Incident added successfully'))
    .catch(err => {res.status(400).json('ERROR : ' + err)});
}) ;

module.exports = Router ;