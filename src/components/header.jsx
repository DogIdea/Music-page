import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title:'个人音乐测试'
        }
    }
    render() {
        let HeaderMessage,HeaderIcon;
        if (this.props.sign.name === 'home') {
            HeaderMessage = (
            <div className="header-message">
              <div className="icon">
                <i className="iconfont icon-M"></i>
              </div>
              <div className="title">{this.state.title}</div>
            </div>
            )
            HeaderIcon =(
                <div className="icon">
                    <i className="iconfont icon-sousuo"></i>
                </div>
            )
        }else if(this.props.sign.name === 'search') {
            HeaderMessage = (
                <div className="header-message">
                    <input type="text" placeholder="请输入关键词..."/>
                </div>
            )
            HeaderIcon = (
                <div className="icon">
                  <span className="iconfont cancel">取消</span>
                </div>
            )
        }
        return (
            <header  className="music-header">
               {HeaderMessage}
               <NavLink to={this.props.sign.path}>
                  {HeaderIcon}
               </NavLink>
            </header>
        )
    }
}

export default Header;