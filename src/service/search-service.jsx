import {Fetch} from "../utils/utils.jsx";

//用于搜索keywords为关键字
export function GetSearchList(keywords,limit) {
    return Fetch({
        url:'/search',
        method:'get',
        params:{
            keywords:keywords,
            limit:limit
        }
    })
};

//用于加载热搜关键字
export function GetSearchHot() {
    return Fetch({
        url:'/search/hot',
        method:'get'
    })
};

//用于搜索建议keywords为关键字albums唱片 artists歌手 songs单曲 playlists歌单
export function GetSearchSuggest(keywords) {
    return Fetch({
        url:'/search/suggest',
        method:'get',
        params:{keywords:keywords}
    })
};