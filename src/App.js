import React, { Component } from 'react';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

export default class App extends Component {

  constructor(){
    super(); 
    this.state={
      list:[],
    }
    this.add = this.add.bind(this)
  }

  add(listVal){
    this.setState({list : listVal})
  }

  render() {
    return (
      <div>
      <FirstComp add={this.add}/>
      <SecondComp list={this.state.list} />
      </div>
    )
}
}