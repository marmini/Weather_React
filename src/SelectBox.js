import React,{Component} from 'react';

export default class SelectBox extends Component{

  constructor(props){
   super(props)
    this.state = {
        values : this.props.values,
        data : this.props.data,
    }
    this.onChangeDrop=this.onChangeDrop.bind(this);
  }

  onChangeDrop(e) {
      const value = e.target.value;
      this.props.ret(value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ values: nextProps.values ,data :nextProps.data })
}


makeItem = function(X) {
    return <option>{X}</option>;
};

  render(){
      return(
        <select defaultValue={this.state.values} onChange={this.onChangeDrop} className="form-control">
         {this.state.data.map(this.makeItem)}
      </select>

      );
  }
}