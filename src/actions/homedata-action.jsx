import {PersonalizedSongs} from '../service/home-service.jsx';

export const LoadRecommendSongs = (dispatch) =>{
    const res = PersonalizedSongs().then((res)=>{
        return res.data
    })
    console.log(res)
    dispatch({
        type:'LOAD_RECOMMENDSONG',
        data:res.result
    })
}