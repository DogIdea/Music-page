import {PersonalizedSongs,TopPlayList,PersonalizedDj,PersonalizedProgram} from '../service/home-service.jsx';

export const LoadPersonalizedSongs = async (dispatch) =>{
    const res = await PersonalizedSongs(6)
    dispatch({
        type:'PERSONALIZED_SONGS',
        personalizedsongs:res.data
    })
}

export const LoadTopPlayList = async (dispatch) =>{
    const res = await TopPlayList(6)
    dispatch({
        type:'TOP_PLAYLIST',
        topplaylist:res.data
    })
}


export const LoadPersonalizedDj = async (dispatch) =>{
    const res = await PersonalizedDj()
    dispatch({
        type:'PERSONALIZE_Dj',
        personalizeddj:res.data
    })
}

export const LoadPersonalizedProgram = async (dispatch)=>{
    const res = await PersonalizedProgram()
    dispatch({
        type:'PERSONALIZED_PROGRAM',
        personalizedprogram:res.data
    })
}