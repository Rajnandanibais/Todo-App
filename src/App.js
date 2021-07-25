import React,{Component} from 'react';
import Todo from './component/Todo'
import Header from './component/Header';
import AddTodo from './component/AddTodo';
import './App.css'
import {v4 as uuidv4 }from 'uuid';

class App extends Component {
constructor() {
  super()
  this.state={
    todos:[
      {
        id:uuidv4(),
        title:'go for a walk',
        completed:false
      },
     { 
     id:uuidv4(),
     title:"doing assignments",
     completed:'completed',
     },
     {
       id:uuidv4(),
       title:"reading articles",
       completed:false
     },
     {
       id:uuidv4(),
       title:"preparing for interview",
       completed:false
     }
    ]
  }
}

//event for checkbox
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo=>{
    if(todo.id===id){
      todo.completed = !todo.completed 
    }
  return todo;
  })
})
}

 delTodo=(id)=>{
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]});
}

 AddTodo=(title)=>{
  const newTodo={
    id:uuidv4(),
    title:title,
    completed:false,
  }
  this.setState({todos:[...this.state.todos,newTodo]})
}

  render(){
    
    return(
      
      <div className="App">
      <div className="container">
      <Header/>
      <AddTodo  AddTodo={this.AddTodo}/>
    <Todo todos={this.state.todos} markComplete={this.markComplete}   delTodo={this.delTodo}/></div></div>
    
    );
  }
    }
    

export default App;