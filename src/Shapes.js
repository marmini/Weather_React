import React,{Component} from 'react'; 
import './Shapes.css';

export default class Shapes extends Component{

    constructor(props) {
        super(props);
        this.state=
          {
            shape :props.shape,
            color :props.color,
            count :props.count,
            };

            this.countIncrementer=this.countIncrementer.bind(this);
      }

      componentWillReceiveProps(nextProps) {
        this.setState({ shape: nextProps.shape , color: nextProps.color})
    }


    countIncrementer(){
      this.setState({ count: this.state.count+1})
      this.props.countIncr(this.state.count)
      
  }

       render(){
          console.log(this.state);
            return (
                
                 <div>
                    <div>
                    {(() => {
                      switch (this.props.shape) {
                        case "square":  return (
                            <div>
                            <div className='square-css' style={{ backgroundColor: this.state.color}}
                               onDoubleClick={this.countIncrementer}></div>          
                            <div>{this.state.count}</div>                   
                            </div>
                          );
                          case "circle": return (
                            <div>
                            <div className='circle-css' style={{ backgroundColor: this.state.color}}
                             onDoubleClick={this.countIncrementer}></div>
                            </div>
                          );
                          case "rectangle":return (
                            <div>
                            <div className='rectangle-css' style={{ backgroundColor: this.state.color}}
                             onDoubleClick={this.countIncrementer}></div>
                            </div>
                          );                        
                      }
                    })()} 
                  </div>
                    
                     
                 </div>
                
              );    
    }
}