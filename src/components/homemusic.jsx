import React from 'react';
import NewSwiper from './swiper';

class HomeMusic extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            styleclassname:{
                banner:'banner',
                itemimg:'itemimg'
            },
            swiperimage:[
                {url:1,text:'1.jpg'},
                {url:2,text:'2.jpg'},
                {url:3,text:'3.jpg'},
                {url:4,text:'4.jpg'}
            ],
            menuicon:[
                {iconname:'icon-date-empty',path:'',text:'每日推荐'},
                {iconname:'icon-paihang',path:'',text:'排行榜'},
                {iconname:'icon-caidan1',path:'',text:'歌单'},
                {iconname:'icon-yinyuediepian',path:'',text:'新歌热推'},
            ]
        }
    }
    render() {
        return (
            <div className="home-music">
                <NewSwiper styleclassname={this.state.styleclassname} swiperimage={this.state.swiperimage}></NewSwiper>
                <div className="home-music-menu">
                    {
                        this.state.menuicon.map(function({iconname,text}){
                            return (
                                <div key={text}>
                                    <div className="menu-icon">
                                        <i className={['iconfont',iconname].join(' ')}></i>
                                    </div>
                                    <span className="menu-text">{text}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="menu-border"></div>
                <div className="content-body">
                    <div className="content-title">
                        推荐歌单
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                    <ul className="content-component">
                        <li className="content-item">
                            <div className="item-img" ></div>
                            <span className="item-label">
                            <i className="iconfont icon-erji"></i>
                                这是一张图片
                            </span>
                            <span className="item-title">这是一张图片非常好看的图片</span>
                        </li>
                    </ul>
                </div>
                <div className="content-body">
                    <div className="content-title">
                        推荐新音乐
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                    <ul className="content-component">
                        <li className="content-item">
                            <div className="item-img" ></div>
                            <span className="item-label">
                            <i className="iconfont icon-erji"></i>
                                这是一张图片
                            </span>
                            <span className="item-title">这是一张图片非常好看的图片</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeMusic;