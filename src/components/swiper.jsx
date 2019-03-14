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
       console.log("swiper挂载了")
       new Swiper('swiper-container',{
            loop: true,     
            autoplay:{   
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
       })
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className='swiper-pagination'></div>
            </div>
        )
    }
}

export default NewSwiper;