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
                    checked={this.props.item.name === this.state.selected[this.props.item].name}
                    onChange={e => this.props.handleUpdateFeature(this.props.item, e.target.value)}
                />
                <label htmlFor={this.props.key} className="feature__label">
                {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        )
    }

}

export default ListItem;