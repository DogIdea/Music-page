
const initialState={
    PersonalizedSongs:{},
    TopPlayList:{},
    PersonalizedDj:{},
    PersonalizedProgram:{}
}

export const homeData = (state=initialState,action) => {
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            let Newaction = {};
            Newaction[action.data.name]=action.data.data;
            return Object.assign({}, {...state}, Newaction)
        default:
            return state
    }
}

