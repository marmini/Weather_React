import React, { Component } from 'react';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

var shapeData = ['Select Shape','square', 'circle', 'rectangle']
var colorData = ['Select Color','red','blue','green'];

export default class App extends Component {

  constructor(){
    super(); 
    this.state={
     list:[],
    }

   this.listToPush=[]
   this.appendToList = this.appendToList.bind(this);
   this.clickedShape = this.clickedShape.bind(this);
  }

  appendToList(shapeColor){
   var booleanval=false;
   if(this.state.list.length!==0){
   for(var i=0;i<this.state.list.length;i++){
   if(this.state.list[i].selectedShape===shapeColor.selectedShape && this.state.list[i].selectedColor===shapeColor.selectedColor){
      shapeColor.selectedCount = this.state.list[i].selectedCount
      booleanval=true;
   }else{
     if(booleanval===false){
      shapeColor.selectedCount=0
     }
     
   }
   }
  }
   this.listToPush.push(shapeColor)
   this.setState({list: this.listToPush});
  }

  clickedShape(state){
    for(var i=0;i<this.state.list.length;i++){
      if(state.shape===this.state.list[i].selectedShape && state.color===this.state.list[i].selectedColor){
        this.state.list[i].selectedCount=state.count+1
      }
    }
    this.forceUpdate()
   }

  render() {
    return (
      <div>
      <FirstComp shapes={shapeData} colors={colorData} getShapCol={this.appendToList}/>
      <SecondComp listToRender={this.state.list} clickedShapeColor={this.clickedShape}/>
      </div>
    )
}
}