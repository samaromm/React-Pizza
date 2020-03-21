import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
import data from './components/db.json';

class App extends Component {

  constructor(){
    super()
    this.state={
      butId:1,
      topping:"Plain",
      size:"small",
      vegetarian:false,
      dataCopy:data.pizzas
    }
  }

  
  handleClick=(event)=>{
    this.setState({
      butId: event.target.id
    })
    const item = data.pizzas.find(item1 => item1.id == event.target.id);
    this.setState({
      topping:item.topping,
      size:item.size,
      vegetarian:item.vegetarian
    })
  }

  forChange=(event)=>{
    this.setState({topping: event.target.value});
   
  }

  handleSelect =(event)=>{
    this.setState({size: event.target.value});    
  }
  handleOptionChange=(event)=>{
    this.setState({
      vegetarian: event.target.value=="false"?false:true
    });
  }

  submitClick=(event)=>{
    event.preventDefault();
    console.log(this.state.dataCopy)
    const changes = {
      "id": this.state.butId,
      "topping": this.state.topping,
      "size": this.state.size,
      "vegetarian": this.state.vegetarian
    }
    let newDataCopy = Object.assign({}, this.state.dataCopy[this.state.butId-1],  changes )
    this.state.dataCopy[this.state.butId-1]=newDataCopy
    this.setState({
      topping:changes.topping,
      size:changes.size,
      vegetarian:changes.vegetarian
    })
    
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} forChange={this.forChange} submitClick={this.submitClick} handleOptionChange={this.handleOptionChange} handleSelect={this.handleSelect}/>
        <PizzaList handleClick={this.handleClick} pizzas={this.state.dataCopy} />
        {/*console.log(this.state.dataCopy)*/}
      </Fragment>
    );
  }
}

export default App;
