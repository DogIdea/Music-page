import * as types from './action_type.jsx';

export const LoadDataBegin = () =>{
    return {
        type:types.GET_DATA_BEGIN,
    }
}

export const LoadDataSuccess = (data,name) =>{
    return {
        type:types.GET_DATA_SUCCESS,
        data:{name,data}
    }
}

export const LoadSessionSuccess = (data) =>{
    return {
        type:types.GET_SESSION_SUCCESS,
        SessionData:data
    }

}

export const LoadDataFailure = () =>{
    return {
        type:types.GET_DATA_FAILURE,
    }
}

export const IsSearch = (issign,value) => {
    return {
        type:types.GET_IS_SEARCH,
        IsSearch:{
            IsSign:issign,
            Value:value
        }
    }
}


export function LoadData(fn,value='',type=0,limit=0,offset=0) {
    return dispatch => {
      dispatch(LoadDataBegin());
      if(type > 0){
        return fn(value,type,limit,offset)
        .then(res => {
            console.log(fn.name)
            dispatch(LoadDataSuccess(res.data,fn.name))
        })
        .catch(error => dispatch(LoadDataFailure(error)));
      }
      return fn(value)
        .then(res => {
            dispatch(LoadDataSuccess(res.data,fn.name))
        })
        .catch(error => dispatch(LoadDataFailure(error)));
    };
  }

export function LoadSession(data=''){
    let newsearcharr=[];
    let newstr = '';
    return dispatch =>{
        if(localStorage.getItem('SearchMusicHistory') === null) {
            localStorage.setItem("SearchMusicHistory",data);
            newsearcharr.push(localStorage.getItem('SearchMusicHistory'))
        }else{
            newstr = localStorage.getItem('SearchMusicHistory') + ',' + data;
            localStorage.setItem("SearchMusicHistory",newstr);
            newsearcharr = localStorage.getItem('SearchMusicHistory').split(",");
        }
        newsearcharr=removeEmptyArrayEle(newsearcharr);
        newsearcharr=unique(newsearcharr);
        dispatch(LoadSessionSuccess(newsearcharr));
    }
}

function removeEmptyArrayEle(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === undefined || arr[i] == null || arr[i] === '') {
            arr.splice(i,1);
            i = i - 1;
        }
    }
    return arr;
}

function unique(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(hash.indexOf(arr[i])===-1){
        hash.push(arr[i]);
       }
    }
    return hash;
  }