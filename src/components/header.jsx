import React from 'react';
import '../assets/css/header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title:'个人音乐测试'
        }
    }
    render() {
        return (
            <header  className="music-header">
               <div className="icon">
                 <i className="iconfont icon-M"></i>
               </div>
               <div className="title">{this.state.title}</div>
               <div className="icon">
                 <i className="iconfont icon-sousuo"></i>
               </div>
            </header>
        )
    }
}

export default Header;