
const initialState={
    PersonalizedSongs:{},
    TopPlayList:{},
    PersonalizedDj:{},
    PersonalizedProgram:{}
}

export const homeData = (state=initialState,action) => {
    let Newaction = {};
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            Newaction[action.data.name]=action.data.data;
            return Object.assign({}, {...state}, Newaction)
        default:
            return state
    }
}

