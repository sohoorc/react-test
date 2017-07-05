import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
export default class IndexBody extends React.Component{
    constructor(){
        super();    // 调用基类的所有初始化方法
        this.state = {username:'Parry',age:'66'}
        
    }

    changeUserInfo(){
        this.setState({username:'肥皂',age:'3'})
    }

    handleChildValueChange(event){
        this.setState({age:event.target.value});
    }

    render(){
        // setTimeout(()=>{
        //     this.setState({username:'肥皂',age:'1.5'})
        // },3000)


        return (
            <div>
                <h1>内容部分啊</h1>
               <p>姓名：{this.state.username}  年龄：{this.state.age}</p>
                {/*这是注释*/}
                <p>{this.props.userid}</p>
                <input type='button' value = "提交" onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

IndexBody.propTypes = {
    userid:React.PropTypes.number.isRequired
}