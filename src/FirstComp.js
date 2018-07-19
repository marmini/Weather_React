import React,{Component} from 'react'; 

export default class FirstComp extends Component{

    constructor(){
        super();

        this.state = { shape: '',color:'',selectedShape:'', selectedColor:''};
        this.list = [];
        this.onShapeChange=this.onShapeChange.bind(this);
        this.addItem=this.addItem.bind(this);
        this.replaceItem=this.replaceItem.bind(this);

    }   


  onShapeChange(e) {
    this.setState({
      selectedShape: e.target.value,
    })
  }

  onColorChange(e) {
    this.setState({
      selectedColor: e.target.value,
    })
  }
  
  addItem(){
    this.setState({
     shape : this.state.selectedShape,
     color : this.state.selectedColor,
    })
  
    this.list.push(this.state)
    this.props.add(this.list);
  }

  replaceItem(){
   
    this.setState({
      shape : this.state.selectedShape,
      color : this.state.selectedColor,
     })
     this.list.push(this.state)
     this.list.pop()
     this.props.add(this.list);
  }
    
    render(){
        return(
        <div className="form-group">
      
        <label htmlFor="select1" >Select Shape:</label>
        <select defaultValue={this.state.shape} onChange={this.onShapeChange} className="form-control">
          <option value="">Select Shape</option>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
        </select>

        <label htmlFor="color1" >Select Color:</label>
        <select defaultValue={this.state.color} onChange={this.onColorChange.bind(this)} className="form-control">
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
       
        <button onClick={this.addItem}  >
           Add
        </button>
        <button onClick={this.replaceItem}>
           Replace
        </button>
        
      </div>
  
         ) }
    


}