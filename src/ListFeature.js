import React, { Component } from 'react';
import './ListFeature.css';

class ListFeature extends Component {
    render(){
        return(
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {this.props.options}
            </fieldset>
        )
    }
}

export default ListFeature;