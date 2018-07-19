import React,{Component} from 'react'; 
import './Shapes.css';

export default class Shapes extends Component{

    constructor(props) {
        super(props);
        this.state=
          {
            shape :props.shape,
            color :props.color,

            };
        
      }

      componentWillReceiveProps(nextProps) {
        this.setState({ shape: nextProps.shape , color: nextProps.color})
    }

     
       render(){
          
            return (
                
                 <div>
                    <div>
                    {(() => {
                      switch (this.props.shape) {
                        case "square":  return (
                            <div>
                            <div className='square-css' style={{ backgroundColor: this.state.color}} 
                              onClick={this.onItemClick} onDoubleClick={()=> this.setState({count: this.state.count + 1})}></div>
                             <span style={{position: 'absolute',top:'15%',width:'100px',left:'32%'}}>{this.state.count}</span>
                             </div>
                          );
                          case "circle": return (
                            <div>
                            <div className='circle-css' style={{ backgroundColor: this.state.color}} 
                            onClick={this.onItemClick} onDoubleClick={()=> this.setState({count: this.state.count + 1})}></div>
                            <span style={{position: 'absolute',top:'15%',width:'100px',left:'45%'}}>{this.state.count}</span>
                            </div>
                          );
                          case "rectangle":return (
                              <div>
                            <div className='rectangle-css' style={{ backgroundColor: this.state.color}} 
                            onClick={this.onItemClick} onDoubleClick={()=> this.setState({count: this.state.count + 1})}></div>
                            <span style={{position: 'absolute',top:'15%',width:'100px',left:'62%'}}>{this.state.count}</span>
                            </div>
                          );                        
                      }
                    })()} 
                  </div>
                    
                     
                 </div>
                
              );    
    }
}