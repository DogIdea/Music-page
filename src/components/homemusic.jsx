import React from 'react';
import NewSwiper from './swiper';
import { connect } from 'react-redux';
import { Expect } from '../utils/utils.jsx';
import { LoadData } from '../actions/homedata-action.jsx';
import { PersonalizedSongs,TopPlayList } from '../service/home-service.jsx';


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
        this.props.dispatch(LoadData(PersonalizedSongs,6))
        this.props.dispatch(LoadData(TopPlayList,6))
    }
    shouldComponentUpdate(){
        if(!this.props.homemusicdata.PersonalizedSongs.hasOwnProperty('result') &&  !this.props.homemusicdata.TopPlayList.hasOwnProperty('playlists')){
            return false
        }
        return true
    }
    render() {
        const personalizedsongs = this.props.homemusicdata.hasOwnProperty('PersonalizedSongs') ? this.props.homemusicdata.PersonalizedSongs : {}
        const topplaylist =  this.props.homemusicdata.hasOwnProperty('TopPlayList') ? this.props.homemusicdata.TopPlayList :{}
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
                            topplaylist.hasOwnProperty('playlists') ? topplaylist.playlists.map(function({coverImgUrl,playCount,name}){
                                return (
                                    <li className="content-item" key={name}>
                                        <img className="item-img" src={coverImgUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {Expect(playCount)}
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
                            personalizedsongs.hasOwnProperty('result') ? personalizedsongs.result.map(function({picUrl,playCount,name}){
                                return (
                                    <li className="content-item" key={name}>
                                        <img className="item-img" src={picUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {Expect(playCount)}
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
        homemusicdata: state.homeData
    }
}

export default connect(mapStateToProps)(HomeMusic);