import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class NewSwiper extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
       //传入的classname要带.
       new Swiper('.swiper-container',{
        loop: true,     
            autoplay:{   
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        })
    }
    render() {
        const itemimg=this.props.styleclassname.itemimg
        return (
            <div className={this.props.styleclassname.banner}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.props.swiperimage.map(function({url,text}){
                                return(
                                    <div className="swiper-slide" key={text}>
                                        <img className={itemimg} src={require('../assets/img/swiper/'+url+'.jpg')} alt={text}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}

export default NewSwiper;