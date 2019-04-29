import {Fetch} from "../utils/utils.jsx";

//获取相似歌手
export function Artists(id) {
    return Fetch({
        url:'/simi/artist',
        method:'get',
        params:{
            id:id
        }
    })
};