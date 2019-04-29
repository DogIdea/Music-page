import {Fetch} from "../utils/utils.jsx";

//获取歌手专辑
export function ArtistsAlbums(id,limit) {
    return Fetch({
        url:'/artist/album',
        method:'get',
        params:{
            id:id,
            limit:limit
        }
    })
};