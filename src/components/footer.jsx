import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/bottom.scss';

class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            footericon:[
                {
                    iconname:'wangyiyunyinyuemusic',
                    path:'/home'
                },
                {
                    iconname:'shipinbofangyingpian',
                    path:'/video'
                },
                {
                    iconname:'icon-music',
                    path:'/mine'
                },
                {
                    iconname:'iconfuzhi',
                    path:'/user'
                }]
        }
    }
    render() {
        return (
            <footer  className="music-bottom">
                {
                    this.state.footericon.map(function({iconname,path}){
                        return (
                                <NavLink to={path} className="icon" key={iconname} activeClassName='iconselect'>
                                    <i className={'icon-'+iconname}></i>
                                </NavLink>
                        )
                    })
                }
            </footer>
        )
    }
}

export default Footer;