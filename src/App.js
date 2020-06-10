import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      editPizza: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzaData => {
      this.setState({
        pizzas: pizzaData
      })
    })
  }

  handleEdit = (pizza) => {
    this.setState({
      editPizza: pizza
    })
    console.log("EDIT", pizza)
  }

  editTopping = (event) => {
    this.setState({
      editPizza: {...this.state.editPizz, topping: event.target.value}
    })
  }
  

    

  render() {
    // console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} editTopping={this.editTopping} />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit} />
      </Fragment>
    );
  }
}

export default App;
