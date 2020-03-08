import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import data from '../components/db.json';
import PizzaForm from '../components/PizzaForm'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <Pizza></Pizza>
        <tbody>
          {
              <tr>
                <td >{this.props.topping}</td>
                <td >{this.props.size}</td>
                <td >{this.props.vegetarian?"Yes":"No"}</td>
                <td ><button type="button" className="btn btn-primary" id={this.props.id} onClick={this.props.handleClick} >Edit Pizza</button></td>
              </tr>
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
