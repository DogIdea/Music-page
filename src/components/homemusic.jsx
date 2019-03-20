import React from 'react';
import NewSwiper from './swiper';
import { connect } from 'react-redux';
import {LoadPersonalizedSongs,LoadTopPlayList} from '../actions/homedata-action.jsx';


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
    componentWillMount(){
        this.props.dispatch(LoadPersonalizedSongs)
        this.props.dispatch(LoadTopPlayList)
        console.log("子元素的componentWillMount")
    }
    render() {
        const personalizedsongs = this.props.homedata.homeData.personalizedsongs ? this.props.homedata.homeData.personalizedsongs : {}
        const topplaylist =  this.props.homedata.homeData.topplaylist ? this.props.homedata.homeData.topplaylist :{}
        console.log(personalizedsongs,topplaylist)
        console.log("子元素的render")
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
                        {
                            topplaylist.playlists ? topplaylist.playlists.map(function({coverImgUrl,subscribedCount,name}){
                                return (
                                    <li className="content-item" key={name}>
                                        <img className="item-img" src={coverImgUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {subscribedCount}
                                        </span>
                                        <span className="item-title">{name}</span>
                                    </li>
                                )
                            }) : []
                        }
                    </ul>
                </div>
                <div className="content-body">
                    <div className="content-title">
                        推荐新音乐
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                    <ul className="content-component">
                    {
                            personalizedsongs.result ? personalizedsongs.result.map(function({picUrl,trackCount,name}){
                                return (
                                    <li className="content-item" key={name}>
                                        <img className="item-img" src={picUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {trackCount}
                                        </span>
                                        <span className="item-title">{name}</span>
                                    </li>
                                )
                            }) : []
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        homedata: state
    }
}

export default connect(mapStateToProps)(HomeMusic);