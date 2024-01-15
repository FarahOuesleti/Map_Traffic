import axios from 'axios';
import React, { Component } from 'react' ;

export default class InfoCard extends Component {     
    
    constructor(props) {
        super();

    }
    
    componentDidMount() {
    }
    
    
    render() {
        return(
            <div>
                 <div class="cards">
                
                    <link rel="stylesheet" href="../InfoCard_style.css" />
                    <article class="information [ card ]">
                        <span class="tag">Location</span>
                        <h2 class="title">Name</h2>
                        <p class="info">Longitude : {} </p>
                        <p class="info">Latitude : {} </p>
                       
                    </article>
                </div>

            </div>
    )
    }
    
}