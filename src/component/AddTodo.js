import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
      title:''
    }

onSubmit = (e)=>{
  e.preventDefault();
  this.props.AddTodo(this.state.title)
  this.setState({title:''})
}

onChange  = (e)=>this.setState({[e.target.name]: e.target.value});
render(){
    return (
      <form  onSubmit={this.onSubmit} >
      <input type="text" 
      name="title"
       placeholder="Add Todo........."  
       value={this.state.title}
       onChange ={this.onChange}
       style={{width:"100%", padding:'10px'}}
       />
      </form>
    )
  }
}

export default AddTodo