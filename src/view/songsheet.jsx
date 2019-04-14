import React from 'react';
import '../assets/css/songsheet.scss';
import Footer from '../components/footer.jsx';
import HeaderSong from '../components/headersong.jsx';

class SongSheet extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sign:{
                title:'歌单',
                name:'songsheet',
                path:'/home'
            }
        }
    }
    render() {
        return (
            <div>
                <HeaderSong sign={this.state.sign}></HeaderSong>
                <Footer></Footer>
            </div>
        )
    }
}


export default SongSheet;