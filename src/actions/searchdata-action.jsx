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
        data
    }

}

export const LoadDataFailure = () =>{
    return {
        type:types.GET_DATA_FAILURE,
    }
}


export function LoadData(fn,value='') {
    return dispatch => {
      dispatch(LoadDataBegin());
      return fn(value)
        .then(res => dispatch(LoadDataSuccess(res.data,fn.name)))
        .catch(error => dispatch(LoadDataFailure(error)));
    };
  }