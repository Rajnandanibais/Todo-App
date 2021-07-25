import React,{Component} from 'react'
import Todoiteam from './Todoiteam';

class Todo extends Component{
    
 render(){
return this.props.todos.map((todo)=>(
<Todoiteam  key={todo.id} todos={todo} markComplete={this.props.markComplete}
delTodo={this.props.delTodo}
/>
));
}}
export default Todo;