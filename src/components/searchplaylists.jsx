import React from 'react';
import { Expect } from '../utils/utils.jsx';
import { connect } from 'react-redux';

class SearchPlayLists extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let getsearchlist = this.props.searchsongsdata.result || {}
        return (
            <div className="playlistsbody">
                <ul className="playlist-lists">
                   {
                       getsearchlist.hasOwnProperty('playlists') ? getsearchlist.playlists.map(function({id,name,trackCount,coverImgUrl,playCount}){
                           return (
                            <li key={id}>
                                <div className="playlist-img">
                                    <img  src={coverImgUrl} alt=""/>
                                </div>
                                <div className="playlist-content">
                                    <span>{name}</span>
                                    <span>{trackCount}首音乐 by China-ABC, 播放{Expect(playCount)}次</span>
                                </div>
                            </li>
                           )
                       }) : []
                   }
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

export default connect(mapStateToProps)(SearchPlayLists);