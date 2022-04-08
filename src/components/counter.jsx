import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count:this.props.value 
     }; 
     
handleIncrement= ()=>{
    console.log("got incremented",this.state)
    
    this.setState({count:this.state.count + 1})
} 
handleDecrement= ()=>{
    console.log("got incremented",this.state)
    
    this.setState({count:this.state.count - 1})
} 
    render() { 
        
        return (
            <div >
                 <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>decrement</button>
                <span    className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>increment</button>
            </div >
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } =this.state;
    return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;