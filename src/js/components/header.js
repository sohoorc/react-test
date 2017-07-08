import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state ={
            miniHeader:false
        };
    };

    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        })
    }

    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: '#333333',
                'color': '#ffffff',
                textAlign:'center'
            }
        };

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

