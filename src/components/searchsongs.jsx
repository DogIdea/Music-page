import React from 'react';
import { connect } from 'react-redux';

class SearchSong extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let getsearchlist = this.props.searchsongsdata.GetSearchList.hasOwnProperty('result') ? this.props.searchsongsdata.GetSearchList.result : {};
        return (
            <div className="songsbody">
                <div className="play-lists-all">
                    <i className="iconfont icon-play"></i>
                    <span>播放全部</span>
                </div>
                <ul className="songs-lists">
                    {
                       getsearchlist.hasOwnProperty('songs') ?  getsearchlist.songs.map(function({id,name,artists,album}){
                        return (
                            <li key={id}>
                                <div>
                                    <h5>{name}</h5>
                                    {
                                        artists.length > 0 ? artists.map(function({name},index){
                                            console.log(index)
                                            return (
                                                index === artists.length - 1 ? <span key={name}>{name}</span> : <span key={name}>{name}/</span>   
                                            )
                                        }) : []
                                    
                                    }
                                    <span>{album.name}</span>
                                </div>
                                <i className="iconfont icon-shipinbofang"></i>
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
        searchsongsdata: state.searchData
    }
}
export default connect(mapStateToProps)(SearchSong);