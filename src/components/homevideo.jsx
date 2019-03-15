import React from 'react';
import NewSwiper from './swiper';

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
    render() {
        return (
            <div>
                <NewSwiper styleclassname={this.state.styleclassname} swiperimage={this.state.swiperimage}></NewSwiper>
                <div className='home-music-menu'>
                    {
                        this.state.menuicon.map(function({iconname,text}){
                            return (
                                <div key={text}>
                                    <div className='menu-icon'>
                                        <i className={['iconfont',iconname].join(' ')}></i>
                                    </div>
                                    <span className='menu-text'>{text}</span>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default HomeVideo;