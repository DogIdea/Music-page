import React, { Component } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';

//根据路由生成配置
// RoutersConfig 路由配置
// parentPath = '' 父级路由
export function GetRoutersConfig(RoutersConfig,parentPath = ''){
    if(!RoutersConfig || RoutersConfig.length === 0){
        return null
    }
    return (RoutersConfig.map((router)=>(
        <Route exact={router.exact} path={parentPath + router.path} key={parentPath + router.path}
           render={(props) => (
               <router.component {...props}>
                 {/* 在父级路由通过 this.props.children即可添加嵌套路由 */}
                 {GetRoutersConfig(router.routes,parentPath + router.path)}
               </router.component>
           )}
        ></Route>
    )))
}



// 用于异步加载组件
// importComponent函数会返回一个 Promise，在文件加载完成时 resolve
// return AsyncComponent用于返回异步组件加载
export function GetAsyncComponent(importComponent){
    return class AsyncComponent extends Component {
        componentDidMount() {
            // 异步加载
            importComponent().then(({ default: component }) => {
                this.setState({
                    Component: component
                })
            })
        }

        render() {
           // 解构赋值
            const { Component } = this.state || {}
            return Component ? <Component {...this.props} /> : null
        }
    }
}

//用于输出是否超过10000以上播放次数
export function Expect(number){
    if(isNaN(number) && !(typeof(number) == 'number')){
        return;
    }
    let numStr = number.toString()
    if(numStr.length>8){
        let decimal = numStr.substring(numStr.length-8,numStr.length-7)
        return parseFloat(parseInt(number/100000000)+'.'+ decimal )+'亿'
    }
    if(numStr.length>4){
        let decimal = numStr.substring(numStr.length-4,numStr.length-3)
        return parseFloat(parseInt(number/10000)+'.'+ decimal )+'万'
    }
    return number;
}

//配置axios
export function Fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            timeout:30*1000,
            responseType: "json",
            headers: { 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
        });
        instance(options).then((res)=>{
            resolve(res)
        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}