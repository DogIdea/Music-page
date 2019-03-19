import {PersonalizedSongs,TopPlayList} from '../service/home-service.jsx';

export const LoadPersonalizedSongs = async (dispatch) =>{
    const res = await PersonalizedSongs(6)
    dispatch({
        type:'PERSONALIZED_SONGS',
        songdata:res.data
    })
}

export const LoadTopPlayList = async (dispatch) =>{
    const res = await TopPlayList(6)
    dispatch({
        type:'TOP_PLAYLIST',
        newsongdata:res.data
    })
}
