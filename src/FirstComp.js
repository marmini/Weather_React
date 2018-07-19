import React,{Component} from 'react'; 
import SelectBox from './SelectBox';

export default class FirstComp extends Component{

    constructor(){
        super();

        this.state = { shape: '',color:'',constVal:'',count:0};
        this.list = [];
        this.addItem=this.addItem.bind(this);
        this.replaceItem=this.replaceItem.bind(this);
        this.selctedShapeVal = this.selctedShapeVal.bind(this);
        this.selctedcoloreVal = this.selctedcoloreVal.bind(this);
    }   
  
  addItem(){
    this.setState({constVal: this.state.shape.concat("", this.state.color) })
    this.list.push(this.state)
    this.props.add(this.list);
  }

  replaceItem(){
     this.list.pop()
     this.setState({constVal: this.state.shape.concat("", this.state.color) })
     this.list.push(this.state)
     this.props.add(this.list);
  }

  selctedShapeVal(selected){
    this.setState({shape : selected})
  }

  selctedcoloreVal(selected){
    this.setState({color : selected})
  }
    
    render(){
      var dataShapes = ['Select Shape','square', 'circle', 'rectangle']
      var colorData = ['Select Color','red','blue','green'];
        return(
        <div className="form-group">

        <SelectBox  values={this.state.shape} data={dataShapes} ret={(selected)=>{this.selctedShapeVal(selected)}}/>
        <SelectBox  values={this.state.color} data={colorData} ret={(selected)=>{this.selctedcoloreVal(selected)}}/>

        <button onClick={this.addItem}  >
           Add
        </button>
        <button onClick={this.replaceItem}>
           Replace
        </button>

      </div>
  
         ) }
    


}