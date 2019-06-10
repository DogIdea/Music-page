import React from 'react';
import { connect } from 'react-redux';

class SearchArtist extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let getsearchlist = this.props.searchsongsdata.result || {}
        return (
            <div className="artistbody">
                <ul className="artist-lists">
                   {
                       getsearchlist.hasOwnProperty('artists') ?  getsearchlist.artists.map(function({id,name,picUrl,alias}){
                           return (
                            <li key={id}>
                                <div className="artist-img">
                                    <img  src={picUrl} alt=""/>
                                </div>
                                <span>{name}<strong>{alias.length > 0 ? (alias.join(',')) : ''}</strong></span>
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

export default connect(mapStateToProps)(SearchArtist);