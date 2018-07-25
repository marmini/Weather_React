import React, {Component} from 'react';
import Shapes from './Shapes.js';

export default class SecondComp extends Component{

    constructor(props){
        super(props)
        this.state = {
           list : this.props.listToRender,
        }
        this.clickedShapeCol = this.clickedShapeCol.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state.list = nextProps.listToRender
    }

    clickedShapeCol(state){
     this.props.clickedShapeColor(state)
    }

    render(){
        return(
            <div>
              {this.state.list.map((list, index) => (
              <Shapes shape={list.selectedShape} color={list.selectedColor} count={list.selectedCount} clickedShapeCol={this.clickedShapeCol}/>
             ))}
            </div>
        )
    }




}
