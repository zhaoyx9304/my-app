import React from 'react'

class Hello extends React.Component{
    render(){
        return(<h1>Hello world</h1>);
    }
}

React.render(<Hello/>, document.getElementById('root'));