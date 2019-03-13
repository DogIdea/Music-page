import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'swiper'
        }
    }
    componentDidMount(){
        console.log("music加载了")
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