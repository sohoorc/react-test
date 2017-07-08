import React from 'react';

import BodyChild from './bodychild';

import { Input, Button, Tabs ,Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

export default class IndexBody extends React.Component {
    constructor() {
        super();    // 调用基类的所有初始化方法
        this.state = { username: 'Parry', age: '66' }

    }

    changeUserInfo(){
        this.setState({username:'肥皂',age:'3'});
        console.log(this.refs.submitButton)

        this.refs.submitButton.style.color='red';
    }

    handleChildValueChange(event) {
        this.setState({ age: event.target.value });
    }

    render() {
        // setTimeout(()=>{
        //     this.setState({username:'肥皂',age:'1.5'})
        // },3000)


        return (
            <div>
                <h1>内容部分啊</h1>
                <p>姓名：{this.state.username}  年龄：{this.state.age}</p>
                {/*这是注释*/}
                <p>{this.props.userid}</p>
                <Input placeholder="Basic usage" />
                <Input type='button' value="提交" onClick={this.changeUserInfo.bind(this)} />
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
                <div>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>

            </div>
        )
    }
}

IndexBody.propTypes = {
    userid: React.PropTypes.number.isRequired
}