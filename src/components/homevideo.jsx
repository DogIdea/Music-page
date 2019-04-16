import React from 'react';
import NewSwiper from './swiper';
import { connect } from 'react-redux';
import {Expect} from '../utils/utils.jsx';
import {LoadData} from '../actions/homedata-action.jsx';
import {PersonalizedDj,PersonalizedProgram} from '../service/home-service.jsx';

class HomeVideo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            styleclassname:{
                banner:'banner',
                itemimg:'itemimg'
            },
            swiperimage:[
                {url:5,text:'5.jpg'},
                {url:6,text:'6.jpg'},
                {url:7,text:'7.jpg'},
                {url:8,text:'8.jpg'}
            ],
            menuicon:[
                {iconname:'icon-fenlei',path:'',text:'电台分类'},
                {iconname:'icon-shouyinji01',path:'',text:'私人FM'},
                {iconname:'icon-gengduo',path:'',text:'电台排行'},
            ]
        }
    }
    componentDidMount(){
        this.props.dispatch(LoadData(PersonalizedDj))
        this.props.dispatch(LoadData(PersonalizedProgram))
    }
    shouldComponentUpdate(){
        if(!this.props.homevideodata.PersonalizedDj.hasOwnProperty('result') &&  !this.props.homevideodata.PersonalizedProgram.hasOwnProperty('programs')){
            return false
        }
        return true
    }
    render() {
        const personalizeddj = this.props.homevideodata.hasOwnProperty('PersonalizedDj') ? this.props.homevideodata.PersonalizedDj : {}
        const personalizedprogram = this.props.homevideodata.hasOwnProperty('PersonalizedProgram') ? this.props.homevideodata.PersonalizedProgram : {}
        return (
            <div className="home-video">
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
                        今日优选
                    </div>
                    <ul className="content-list">
                        {
                            personalizedprogram.hasOwnProperty('programs') ? personalizedprogram.programs.map(function({name,coverUrl,commentCount}){
                                return (
                                    <li className="content-item menu-border" key={coverUrl}>
                                        <img className="item-img" src={coverUrl} alt={name}/>
                                        <div className="item-content">
                                            <div className="item-title">
                                                <span className="item-name">{name}</span>
                                                <span className="item-hot">
                                                    <i className="iconfont icon-shoucang"></i>
                                                    {commentCount}
                                                </span>
                                            </div>
                                            <i className="iconfont icon-play"></i>
                                        </div>
                                    </li>
                                )
                            }) : []
                        }
                        
                    </ul>
                </div>
                <div className="content-body">
                    <div className="content-title">
                        推荐电台
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                    <ul className="content-component">
                    {
                            personalizeddj.hasOwnProperty('result') ? personalizeddj.result.map(function({picUrl,program,name}){
                                return (
                                    <li className="content-item" key={picUrl}>
                                        <img className="item-img" src={picUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {Expect(program.adjustedPlayCount)}
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
        homevideodata: state.homeData
    }
}
export default connect(mapStateToProps)(HomeVideo);