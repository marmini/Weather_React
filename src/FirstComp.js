import React,{Component} from 'react'; 
import SelectBox from './SelectBox';

export default class FirstComp extends Component{

    constructor(props){
        super(props);
        this.state={
          selectedColor : '',
          selectedShape : '',
          selectedCount : 0,
        }

        this.shapes =this.props.shapes,
        this.colors =this.props.colors,

        this.addItem = this.addItem.bind(this);
    }   
    
    addItem(){
      this.props.getShapCol(this.state);
    }

    render(){
     
        return(
        <div>
        <SelectBox optionList={this.shapes} selectedValue={(selected)=>this.setState({selectedShape: selected})}/>
        <SelectBox optionList={this.colors} selectedValue={(selected)=>this.setState({selectedColor: selected})}/>
        <button onClick={this.addItem}>Add</button>

      </div>
  
         ) }
    


}