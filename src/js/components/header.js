import React from 'react';

export default class ComponentHeader extends React.Component {
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

        return (
         <header style = {styleComponentHeader.header} onClick = {this.switchHeader.bind(this)}>
             <h1>头部1</h1>
         </header>
        )
    }
}