import React, { Component } from 'react';
import './ListItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class ListItem extends Component {
    render(){
        return(
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.featureSlug}
                    // checked={this.props.itemName === this.state.selected[this.props.item].name}
                    onChange={e => this.props.handleUpdateFeature(this.props.item, e.target.value)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.itemName} ({USCurrencyFormat.format(this.props.itemCost)})
                </label>
            </div>
        );
    }

}

export default ListItem;