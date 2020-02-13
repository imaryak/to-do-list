import React from 'react';
import {connect}from 'react-redux';

function ItemList(props) {
  return (
    <div>
      <ul className="item-list">
        { props.todo.map(item => <li>{item}</li>) }
      </ul>
    </div>
  )
}
function mapStateToProps(state){
  return({
    todo:state.todo
  })

}

export default connect(mapStateToProps,null)(ItemList);