import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {Router,Route,hashHistory} from 'react-router'; 


class Root extends React.Component{
    render(){
        return( 
            // 这里替换了之前的index 变成了程序的入口
            <Router history={hashHistory}>

                <Route component={Index} path="/">
                    <Route component={ComponentDetails} path="details"></Route>
                </Route>

                <Route component={ComponentList} path="list"></Route>

            </Router>
        )   
    }
}


ReactDOM.render(
    <Root/>,
    document.getElementById('example')
);   