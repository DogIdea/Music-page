import React from 'react';

class SearchArtist extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="artistbody">
                <ul className="artist-lists">
                   <li>
                       <div className="artist-img">
                           <img  src="https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg" alt=""/>
                       </div>
                       <span>周杰伦<strong>(Jay)</strong></span>
                   </li>
                </ul>
            </div>
        )
    }
}

export default SearchArtist;