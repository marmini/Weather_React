import React, { Component } from 'react';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

export default class App extends Component {

  constructor(){
    super(); 
    this.state={
      list:[],
    }
    
  }

  add(arg1){
    
    this.setState({list : arg1})
    
  }

  render() {
    return (
      <div>
      <FirstComp add={(arg1)=>{this.add(arg1)}}/>
      <SecondComp list={this.state.list}/>
      </div>
    )
}
}