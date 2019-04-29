import {Fetch} from "../utils/utils.jsx";

//获取歌手单曲
export function ArtistsSongs(id) {
    return Fetch({
        url:'/artists',
        method:'get',
        params:{
            id:id
        }
    })
};

//获取相似音乐
export function SimilarSongs(id) {
    return Fetch({
        url:'/simi/song',
        method:'get',
        params:{
            id:id
        }
    })
};