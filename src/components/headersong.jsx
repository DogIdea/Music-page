import React from 'react';
import {NavLink} from 'react-router-dom';

class HeaderSong extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        let HeaderMessage,HeaderIcon;
        if (this.props.sign.name === 'songsheet') {
            HeaderMessage = (
            <div className="header-message">
              <div className="icon">
                <i className="iconfont icon-youjiantou"></i>
              </div>
              <div className="title">{this.props.sign.title}</div>
            </div>
            )
            HeaderIcon =(
                <div className="icon">
                    <i className="iconfont icon-i-more"></i>
                    <i className="iconfont icon-paihang"></i>
                </div>
            )
        }else if(this.props.sign.name === 'mine') {
            
        }
        return (
            <header  className="song-header">
               <NavLink to={this.props.sign.path}>
                  {HeaderIcon}
               </NavLink>
               {HeaderMessage}
            </header>
        )
    }
}

export default HeaderSong;