import {Fetch} from "../utils/utils.jsx";

//排行榜
export function TopList(idx) {
    return Fetch({
        url:'/top/list',
        method:'get',
        data:{
            idx:idx
        }
    })
};

//所有榜单
export function TopList() {
    return Fetch({
        url:'/toplist',
        method:'post'
    })
};

//歌手榜
export function SingerList() {
    return Fetch({
        url:'/toplist/artist',
        method:'post'
    })
};