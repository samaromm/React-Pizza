import React, {Component} from "react"

class PizzaForm extends Component {

  render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.props.topping} onChange={this.props.forChange}/>
        </div>
        <div className="col">
          <select value={this.props.size} className="form-control" onChange={this.props.handleSelect}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="true" checked={this.props.vegetarian === true} onChange={this.props.handleOptionChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="false" checked={this.props.vegetarian === false} onChange={this.props.handleOptionChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.submitClick}>Submit</button>
        </div>
      </div>

  )}
}

export default PizzaForm
