import {Fetch} from "../utils/utils.jsx";

//获取歌手MV
export function ArtistsMV(id) {
    return Fetch({
        url:'/artist/mv',
        method:'get',
        params:{
            id:id
        }
    })
};
