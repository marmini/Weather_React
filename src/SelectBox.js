import React,{Component} from 'react';

export default class SelectBox extends Component{

  constructor(props){
   super(props)
    this.state = {
        optionList :this.props.optionList,
  }
  this.onChangeDrop = this.onChangeDrop.bind(this);
  }

  onChangeDrop(e) {
    const value = e.target.value;
    this.props.selectedValue(value);
}

   makeItem = function(X) {
    return <option>{X}</option>;
   };

  render(){
      return(
         <div>
         <select selctedValue={this.state.values} onChange={this.onChangeDrop}>
         {this.state.optionList.map(this.makeItem)}
         </select>
         </div>
      );
  }
}