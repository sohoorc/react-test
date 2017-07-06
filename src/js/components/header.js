import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponentHeader extends React.Component{
    constructor(){
        super();
     
    }

    switchHeader(event){
            console.log(event);
            this.refs.headerStyle.style.color="red"
        }

    
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:'#333',
                color:'#fff',
                paddingTop:'15px',
                textAlign:'center' 
            }
        }

        
        return (
            <header className="smallFontSize" ref = 'headerStyle' onClick={this.switchHeader.bind(this)} style = {styleComponentHeader.header}>
                <h1>头部</h1>
            </header>
        )
    }
}

