import {Fetch} from "../utils/utils.jsx";

//获取相似歌曲歌单
export function SimilarPlaylists(id) {
    return Fetch({
        url:'/simi/playlist',
        method:'get',
        params:{
            id:id
        }
    })
};