import axios from 'axios';
import React, { Component } from 'react' ;
import StyleInfoCard from "../InfoCard_style.css" 

// Beginner way of importing js file into react component
//import ScriptTag from 'react-script-tag';



export default class RenderIncident extends Component {     
    
    
    constructor(props) {
        super();
        this.state = {
            Incidents: [] 
          };

    }
    
    componentDidMount() {

        axios.get('http://localhost:5000/Incidents/')
            .then(result =>{ console.log('uuuup');
            console.log(result.data);
                //if (result.data.length > 0) {
                    this.setState({
                        Incidents : result.data.map(Incident => Incident) 
                       
                    })

                    console.log(this.Incident);
                    console.log('middle');
                   
                //}
                console.log('Dooown');
               
            }
            )
        }
    
    
    render() {
        return(
            <div>
  <div className="cards">
    <link rel="stylesheet" href="../InfoCard_style.css" />
    <div className="scrollmenu">
      {this.state.Incidents.map((Incident, index) => (
        <div className="card" key={index}>
          <article className="information">
            <span className="tag">{Incident.Location}</span>
            <h2 className="title">{Incident.Name}</h2>
            <p className="info">Longitude: {Incident.Longitude}</p>
            <p className="info">Latitude: {Incident.Latitude}</p>
          </article>
        </div>
      ))}
    </div>
  </div>
</div>
            
    )
    }
    
}