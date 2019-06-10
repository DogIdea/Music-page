import React from 'react';
import { connect } from 'react-redux';

class SearchAlbums extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props.searchsongsdata)
        let getsearchlist = this.props.searchsongsdata.result || {}
        return (
            <div className="albumsbody">
                <ul className="albums-lists">
                   <li>
                       <div className="albums-img">
                           <div className="albums-border">
                            <img  src="https://p2.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg" alt=""/>
                           </div>
                       </div>
                       <div className="albums-content">
                            <span>寻找周杰伦<strong>(MGSIC)</strong></span>
                            <span>周杰伦  包含单曲：<strong>半岛铁盒</strong></span>
                       </div>
                   </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        searchsongsdata: state.searchData.GetSearchList
    }
}

export default connect(mapStateToProps)(SearchAlbums);