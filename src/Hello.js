import React from 'react';
function Hello() {
    const sayHello = () => {
    console.log("Hello")
    };
    return (
       <div>
           <button onClick={Hello}>say Hello</button>
       </div> 
    )
}

export default Hello;
