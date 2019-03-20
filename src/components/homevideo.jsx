import React from 'react';
import NewSwiper from './swiper';
import { connect } from 'react-redux';
import {LoadPersonalizedDj,LoadPersonalizedProgram} from '../actions/homedata-action.jsx';

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
        this.props.dispatch(LoadPersonalizedDj)
        this.props.dispatch(LoadPersonalizedProgram)
    }
    render() {
        const personalizeddj = this.props.homedata.homeData.personalizeddj ? this.props.homedata.homeData.personalizeddj : {}
        const personalizedprogram = this.props.homedata.homeData.personalizedprogram ? this.props.homedata.homeData.personalizedprogram : {}
        console.log(personalizeddj,personalizedprogram.programs)
        console.log('子元素的render')
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
                        {/* {
                            personalizedprogram.programs ? personalizedprogram.programs.map(function(description,coverUrl,commentCount){
                                return (
                                    <li className="content-item" key={description}>
                                        <img className="item-img" src={coverUrl} alt={description}/>
                                        <div className="item-content">
                                            <div className="item-title">
                                                <span className="item-name">{description}</span>
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
                        } */}
                        
                    </ul>
                </div>
                <div className="content-body">
                    <div className="content-title">
                        推荐电台
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                    <ul className="content-component">
                    {
                            personalizeddj.result ? personalizeddj.result.map(function({picUrl,program,name}){
                                return (
                                    <li className="content-item" key={name}>
                                        <img className="item-img" src={picUrl} alt={name}/>
                                        <span className="item-label">
                                            <i className="iconfont icon-erji"></i>
                                            {program.adjustedPlayCount}
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
export default connect(mapStateToProps)(HomeVideo);