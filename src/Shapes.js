import React,{Component} from 'react';
import './App.css';


class Shapes extends Component{

    constructor(props) {
        super(props);
        this.state={
            color: props.color,
            count :0,
            ColorHolder : ''
        }
        
        this.onItemClick=this.onItemClick.bind(this)
        this.onDoubleClick=this.onDoubleClick.bind(this)
      }
      
      onItemClick() {
        var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        this.setState({ color: ColorCode})
        console.log(this.state.color);
        
       }
       onDoubleClick() {
        this.setState({count: this.state.count + 1})
        console.log(this.state)
       }

        render(){
          
            return (
                <section>
                 <p>
                    {(() => {
                      switch (this.props.shape) {
                        case "square":  return (
                            <div>
                            <div className='square-css' style={{ backgroundColor: this.state.color}} 
                              onClick={this.onItemClick} onDoubleClick={this.onDoubleClick}></div>
                             <span style={{position: 'absolute',top:'18%',width:'100px',left:'32%'}}>{this.state.count}</span>
                             </div>
                          );
                          case "circle": return (
                            <div>
                            <div className='circle-css' style={{ backgroundColor: this.state.color}} 
                            onClick={e =>this.onItemClick(e)} onDoubleClick={e =>this.onDoubleClick(e)}></div>
                            <span style={{position: 'absolute',top:'18%',width:'100px',left:'45%'}}>{this.state.count}</span>
                            </div>
                          );
                          case "rectangle":return (
                              <div>
                            <div className='rectangle-css' style={{ backgroundColor: this.state.color}} 
                            onClick={e =>this.onItemClick(e)} onDoubleClick={e =>this.onDoubleClick(e)}></div>
                            <span style={{position: 'absolute',top:'18%',width:'100px',left:'62%'}}>{this.state.count}</span>
                            </div>
                          );                        
                      }
                    })()} 
                  </p>
                </section>
              );    
    }


  
}
export default Shapes;