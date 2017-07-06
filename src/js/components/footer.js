import React from 'react';

var footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
    render(){
        console.log(footerCss)

        var footerConvertStyle = {

        }

        return (
            <footer className={footerCss.miniFooter}>
                <h1>这里是页脚,一般放置版权信息.© </h1>
            </footer> 
        )
    }
}