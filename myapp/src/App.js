
import React from "react"
class App extends React.Component {
  state={
    text:"",
    todos:[{id:0,task:"hy",done:false},{id:1,task:"frefe",done:false}]
  };
    handelClick=()=>this.setState({todos:[...this.state.todos,{task:this.state.text,done:false,id:Math.random()}],text:""});
    Remove=(id1)=>this.setState({todos:this.state.todos.filter((el)=>el.id!==id1 )})


    Done=(id2)=>  this.setState({ todos:  this.state.todos.map((el,i)=> i===id2 ? {...el, done:!el.done} :el  )   }) 
    render()
  {
    return (
    <div><input type="text" value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})} />
    <button onClick={()=>this.handelClick()}>add</button>
<ul>
 {this.state.todos.map((el,i)=>
 <li key={i}> <span style={el.done? {textDecoration:"line-through"} :null}> {el.task}</span>
 <button onClick={()=>this.Remove(el.id)}>remove</button>
 <button onClick={()=>this.Done(el.id)}>done</button></li>
  )}</ul> 
  </div>)
  }
}
export default App
