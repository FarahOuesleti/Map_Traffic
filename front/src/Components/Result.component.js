import React, { Component } from 'react' ;
import axios from 'axios';

export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
          htmlContent: '' // Initialize state to store the HTML content
        };
      }
    
      componentDidMount() {
        // Fetch the internal HTML file content when the component mounts
        fetch('../mymap.html') // Update the path as per your project structure
          .then(response => response.text())
          .then(html => {
            this.setState({ htmlContent: html }); // Set the fetched HTML content to state
          })
          .catch(error => {
            console.error('Error fetching HTML file:', error);
          });
      }


      render() {
        const { htmlContent } = this.state;
    
        return (
          <div className="Result">
            {/* Render the fetched HTML content using dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        );
      }
}