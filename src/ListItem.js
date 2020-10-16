import React, { Component } from 'react';
import './ListItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class ListItem extends Component {
    render(){
        return(
            <div key={this.props.key} className="feature__item">
                <input
                    type="radio"
                    id={this.props.key}
                    className="feature__option"
                    name={this.props.featureSlug}
                    checked={this.props.feature.name === this.state.selected[this.props.feature].name}
                    onChange={e => this.props.handleUpdateFeature(this.props.feature, e.target.value)}
                />
                <label htmlFor={this.props.key} className="feature__label">
                {this.props.feature.name} ({USCurrencyFormat.format(this.props.feature.cost)})
                </label>
            </div>
        )
    }

}

export default ListItem;