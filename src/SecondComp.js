import React, {Component} from 'react';
import Shapes from './Shapes.js';

export default class SecondComp extends Component{


    constructor(props){
        super(props)
        this.state = {
            list :this.props.list,
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ list: nextProps.list })
    }


   
    render(){
        console.log(this.state.list);
        return(
               <div className="App-body">
                   {this.state.list.map((list1, i) => (
                   <Shapes key={i} shape={list1.shape} color={list1.color}/>
                    ))}
            </div>
            
        )
    }




}
