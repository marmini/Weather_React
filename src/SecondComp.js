import React, {Component} from 'react';
import Shapes from './Shapes.js';
import App from './App';

export default class SecondComp extends Component{


    constructor(props){
        super(props)
        this.state = {
            list :props.list,
        }
        console.log(this.props);
    }


    componentWillReceiveProps(newProps) {
        this.setState({ list: newProps })
    }


   
    render(){
        return(
               <div className="App-body">
                   {this.state.list.map((list1, i) => (
                   <Shapes key={i} shape={list1.shape} color={list1.color}/>
                    ))}
            </div>
            
        )
    }




}
