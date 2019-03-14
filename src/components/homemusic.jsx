import React from 'react';
import NewSwiper from './swiper';

class HomeMusic extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            test:'这是个music'
        }
    }
    componentDidMount(){
        console.log(this.state.test)
    }
    render() {
        return (
            <div>this is music
                <NewSwiper></NewSwiper>
            </div>
        )
    }
}

export default HomeMusic;