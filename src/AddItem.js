import React from 'react';

import {connect}from 'react-redux';
import{addItemAction} from './store/todo';
import {bindActionCreators}from 'redux';
import { Input, Button } from 'antd';


class AddItem extends React.Component {
  state = {
    inputVal: ''
  }
  onclickButton=()=>{
    console.log('thi')
    this.props.addItem(this.state.inputVal);
  }
  onChangeInput = (e) => {
    console.log(e.target.value);
    this.setState({inputVal: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Add Item</h2>
        <div style={{display: 'flex'}}>
          <Input 
            size="large" 
            placeholder="Basic usage"
            onChange={this.onChangeInput}
            value={this.state.inputVal}
            // value="abcd"
          />
          <Button
            size="large"
            type="primary" 
            icon="arrow-right"
            onClick={this.onclickButton}
          />
        </div>
      </div>
    )
  }
}
function mapActionsToProps(dispatch){
return bindActionCreators({
  addItem:addItemAction
},dispatch)
}

export default connect(null,mapActionsToProps)(AddItem);