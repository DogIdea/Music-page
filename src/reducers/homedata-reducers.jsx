
const homeData = function (state={},action) {
    switch(action.type){
        case 'LOAD_RECOMMENDSONG':
            return {
                ...state,
                data:action.data
            }
        default:
            return state
    }
}

export default homeData