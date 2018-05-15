import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        
    }

    setShow(show) {
        this.setState({
            show: true
        });
    }

    render() {
        // Show the button to start with
       if (!this.state.show) {
        return <SurpriseButton onClick={() => this.setShow()} />;
       }
       if (this.state.show){
        return <SurpriseImage />;
       }
    }
    
   
}

