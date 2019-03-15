import {PersonalizedSongs} from '../service/home-service.jsx';

export const LoadRecommendSongs = async (dispatch) =>{
    const res = await PersonalizedSongs()
    console.log(res.data)
    dispatch({
        type:'LOAD_RECOMMENDSONG',
        data:res.data.result
    })
}