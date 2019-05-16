import React from 'react';

class SearchSong extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount(){
        console.log('searchsongs')
    }
    render() {
        return (
            <div className="songsbody">
                <div className="play-lists-all">
                    <i className="iconfont icon-play"></i>
                    <span>播放全部</span>
                </div>
                <ul className="songs-lists">
                    <li>
                        <div>
                            <h5>布拉格广场</h5>
                            <span>蔡依林/周杰伦 - 看我72变</span>
                        </div>
                        <i className="iconfont icon-shipinbofang"></i>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SearchSong;