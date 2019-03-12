import React, { Component } from "react";
import { Route } from 'react-router-dom';


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