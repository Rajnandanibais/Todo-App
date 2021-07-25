import React, { Component } from 'react'

class Todoiteam extends Component {
  //method to check task completed or not
getStyle=()=>{
return{
  backgroundColor:'#f4f4f4',
  padding:'1px',
  borderBottom:'1px #ccc dotted',
  textDecoration : this.props.todos.completed ?'line-through':'none'
}
}

  render()
  {
    const{id,title} = this.props.todos;
    return (
      <div style={this.getStyle()}>
   <p> 
   <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
   {title}
   <button style={btnStyle}  onClick={this.props.delTodo.bind(this,id)}>x</button>
   </p></div>
   
    )}}
  
const btnStyle={
  backgroundColor:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
float:'right'
}


export default Todoiteam


