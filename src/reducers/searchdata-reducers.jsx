const initialState={
    GetSearchHot:{},
    SessionData:{},
    GetSearchSuggest:{},
    IsSearch:{
        IsSign:true,
        Value:''
    }
}

export const searchData = (state=initialState,action) => {
    let Newaction = {};
    switch(action.type){
        case 'GET_IS_SEARCH':
            return Object.assign({}, {...state}, {...action}) 
        case 'GET_DATA_SUCCESS':
            Newaction[action.data.name]=action.data.data;
            return Object.assign({}, state, Newaction)
        case 'GET_SESSION_SUCCESS':
            return Object.assign({}, {...state}, {...action})
        default:
            return state
    }
}