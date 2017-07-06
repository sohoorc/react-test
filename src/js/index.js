const React = require('react');
const ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import IndexBody from './components/indexbody';
import 'antd/dist/antd.css';// ant design样式库



export default class Index extends React.Component {
    componentWillMount(){
        // 页面将要加载钩子
        
    }

    render() {
        return (
            <div>
                <ComponentHeader />
                <div>{this.props.children}</div>
                <IndexBody userid = {123456}/>
                <ComponentFooter/>
                
            </div>
        )
    }

     componentDidMount(){
        //页面加载完钩子
        
    }
}

