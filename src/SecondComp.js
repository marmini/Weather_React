import React, {Component} from 'react';
import Shapes from './Shapes.js';

export default class SecondComp extends Component{


    constructor(props){
        super(props)
        this.state = {
            list :this.props.list,
        }
        this.increCount=this.increCount.bind(this);
      
    }


    componentWillReceiveProps(nextProps) {
       
        this.setState({ list: nextProps.list })
            
    }

    increCount(count,index){

        for(var i=0;i<this.state.length;i++){
            if(this.state.list[i].constVal===this.state.list[index].constVal){
             this.state.list[i].count=count;
            }
        }
    }

   
    render(){
        console.log(this.state.list);
        return(
               <div className="App-body">
                   {this.state.list.map((list1, index) => (
                   <Shapes key={index} shape={list1.shape} color={list1.color} count={list1.count} 
                   countIncr={(count)=>{this.increCount(count,index)}}/>
                    ))}
            </div>
            
        )
    }




}
