import {Fetch} from "../utils/utils.jsx";
import qs from 'qs';

//用于搜索keywords为关键字
export function GetSearchList(keywords) {
    return Fetch({
        url:'/search',
        method:'post',
        data:qs.stringify({
            keywords:keywords
        })
    })
};