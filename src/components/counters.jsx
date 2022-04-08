import React, { Component } from 'react';
import Counter from './counter';
class courses extends Component {
    state = { 
        counters:[
            {id:1, value:0},
            {id:2, value:3},
            {id:3, value:0},
            {id:4, value:1},
            {id:5, value:0}
        ]
     };
      
    render() { 
        console.log(this.counters)
        return (
            <div>{this.state.counters.map(counter=> <Counter key={counter.id}
            value={counter.value} selected= {true} />)}
            </div>
        );
    }
}
 
export default courses;