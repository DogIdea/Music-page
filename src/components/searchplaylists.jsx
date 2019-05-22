import React from 'react';

class SearchPlayLists extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="playlistsbody">
                <ul className="playlist-lists">
                   <li>
                       <div className="playlist-img">
                            <img  src="https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg" alt=""/>
                       </div>
                       <div className="playlist-content">
                            <span>再次寻找周杰伦</span>
                            <span>13首音乐 by China-ABC, 播放452次</span>
                       </div>
                   </li>
                </ul>
            </div>
        )
    }
}

export default SearchPlayLists;