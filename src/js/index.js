const React = require('react');
const ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import IndexBody from './components/indexbody';
import ComponentFooter from './components/footer';

class Index extends React.Component {
    componentWillMount(){
        // 页面将要加载钩子
        
    }

    render() {
        return (
            <div>
                <ComponentHeader />
                <IndexBody userid = {123456}/>
                <ComponentFooter/>
            </div>
        )
    }

     componentDidMount(){
        //页面加载完钩子
        
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);   