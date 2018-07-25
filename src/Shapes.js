import React,{Component} from 'react'; 
import './Shapes.css';

export default class Shapes extends Component{

    constructor(props) {
        super(props);
        this.state={
           shape : this.props.shape,
           color : this.props.color,
           count : this.props.count,
        }
      this.countIncrementer = this.countIncrementer.bind(this)
      }

    countIncrementer(){
     this.props.clickedShapeCol(this.state)
    }

    componentWillReceiveProps(nextProps) {
      this.state.shape = nextProps.shape
      this.state.color = nextProps.color
      this.state.count = nextProps.count
  }


       render(){
            return (
                    <div>
                    {(() => {
                      switch (this.state.shape) {
                        case "square":  return (
                            <div>
                            <div className='square-css' style={{ backgroundColor: this.state.color}}
                               onClick={this.countIncrementer}>{this.state.count}</div>    
                                             
                            </div>
                          );
                          case "circle": return (
                            <div >
                            <div className='circle-css' style={{ backgroundColor: this.state.color}}
                             onClick={this.countIncrementer}>{this.state.count}</div>
                             
                            </div>
                          );
                          case "rectangle":return (
                            <div>
                            <div className='rectangle-css' style={{ backgroundColor: this.state.color}}
                             onClick={this.countIncrementer}>{this.state.count}</div>
                              
                            </div>
                          );                        
                      }
                    })()} 
                  </div>
                    
                     
              );    
    }
}