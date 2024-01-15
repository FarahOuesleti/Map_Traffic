import React, { Component } from 'react' ;
import axios from 'axios';



export default class AddIncident extends Component {

    state = {
        Name : '',
        Location : '',
        Longitude : '',
        Latitude : '',
        Date : '',
        backendMessage: '',
        backendMessageType: 'success'
    }

    constructor(props){
        super(props);

        this.OnChangeName = this.OnChangeName.bind(this);
        this.OnChangeLocation = this.OnChangeLocation.bind(this);
        this.OnChangeLongitude = this.OnChangeLongitude.bind(this);
        this.OnChangeLatitude = this.OnChangeLatitude.bind(this);
        this.OnChangeDate = this.OnChangeDate.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    OnChangeName(e) {
        this.setState( {
            Name : e.target.value
        });
    }
    OnChangeLocation(e) {
        this.setState({
            Location : e.target.value
        });
    }
    OnChangeLongitude(e) {
        this.setState({
            Longitude : e.target.value
        });
    }
    OnChangeLatitude(e) {
        this.setState({
            Latitude : e.target.value
        });
    }
    OnChangeDate(e) {
        this.setState({
            Date : e.target.value
        });
    }

    OnSubmit(e) {
        e.preventDefault();

        const payload = {
            Name : this.state.Name,
            Location : this.state.Location,
            Longitude : this.state.Longitude,
            Latitude : this.state.Latitude,
            Date : this.state.Date
            
        }

        console.log(payload)

        axios.post('http://localhost:5000/Incidents/add/', payload)
            .then(response => {
                // If the result key is true, then reset the form and display the message
                if (response.data.result) {
                    this.setState({
                    Name : '', 
                    Location : '',
                    Longitude : '',
                    Latitude : '',
                    Date : '', 
                    backendMessage: response.data.message, 
                    backendMessageType: 'success'})
                } else {
                    this.setState({backendMessage: response.data.message, backendMessageType: 'danger'})
                }
            })
    }
    
    
    render() {
        return(
            
            <div className="container">
                <h2> Report Incident : </h2>

                {this.state.backendMessage && (
                <div className={`alert alert-${this.state.backendMessageType} alert-dismissible fade show`} role="alert">
                    {this.state.backendMessage}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )}
                
                <form onSubmit={this.OnSubmit}>
                    <div className="form-group">
                        <label htmlFor="IncidentNamee"> Incident name :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.Name} 
                            onChange={this.OnChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Location"> Location :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.Location} 
                            onChange={this.OnChangeLocation}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Latitude"> Latitude :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.Latitude} 
                            onChange={this.OnChangeLatitude}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Longitude"> Longitude :</label>
                        <input type="text" 
                            required
                            className="form-control" 
                            value={this.state.Longitude} 
                            onChange={this.OnChangeLongitude}
                            />
                    </div>
                          
                    
                    
                    <button type="submit" className="btn btn-primary"> Add Incident </button>
                </form>
            </div>            
            )
            
        }
    }

