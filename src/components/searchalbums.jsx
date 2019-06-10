import React from 'react';
import { connect } from 'react-redux';

class SearchAlbums extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let getsearchlist = this.props.searchsongsdata.result || {}
        return (
            <div className="albumsbody">
                <ul className="albums-lists">
                   {
                       getsearchlist.hasOwnProperty('albums') ? getsearchlist.albums.map(function({id,name,company,blurPicUrl,containedSong,artist}){
                          return (
                            <li key={id}>
                                <div className="albums-img">
                                    <div className="albums-border">
                                        <img  src={blurPicUrl} alt={name} />
                                    </div>
                                </div>
                                <div className="albums-content">
                                        <span>{name}<strong>{company === null ? '' : '('+company+')'}</strong></span>
                                        <span className="albums-artist">{artist.name} <strong>{containedSong === '' ? ' ' : '包含单曲:'+containedSong}</strong></span>
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

export default connect(mapStateToProps)(SearchAlbums);