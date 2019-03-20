import {Fetch} from "../utils/utils.jsx";
import qs from 'qs';

//获取每日推荐歌曲(需要登录)
export function RecommendSongs() {
    return Fetch({
        url:'/recommend/songs',
        method:'post'
    })
};

//推荐歌单
export function PersonalizedSongs(limit) {
    return Fetch({
        url:'/personalized',
        method:'post',
        data:qs.stringify({
            limit:limit
        })
    })
};

//精选歌单
export function TopPlayList(limit,order){
    return Fetch({
        url:'/top/playlist',
        method:'post',
        data:qs.stringify({
            limit:limit,
            order:order
        })
    })
}

//推荐新音乐
export function PersonalizedNewSong() {
    return Fetch({
        url:'/personalized/newsong',
        method:'post'
    })
};


//电台 - 分类
export function RadioClassification() {
    return Fetch({
        url:'/dj/catelist',
        method:'post'
    })
};

//私人 FM(需要登录)
export function PersonalizedFm() {
    return Fetch({
        url:'/personal_fm',
        method:'post'
    })
};

//推荐电台
export function PersonalizedDj() {
    return Fetch({
        url:' /personalized/djprogram',
        method:'post'
    })
};

//推荐节目
export function PersonalizedProgram() {
    return Fetch({
        url:' /program/recommend',
        method:'post'
    })
};

//独家放送
export function ExclusiveDistribution() {
    return Fetch({
        url:' /personalized/privatecontent',
        method:'post'
    })
};