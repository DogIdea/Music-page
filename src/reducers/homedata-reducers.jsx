const homeData = (state={songdata:{},newsongdata:{}},action)=>{
    console.log(action)
    switch(action.type){
        case 'PERSONALIZED_SONGS':
            return {
                ...state,
                songdata:action.songdata
            }
        case 'TOP_PLAYLIST':
            return {
                ...state,
                newsongdata:action.newsongdata
            }
        default:
            return state
    }
}

export default homeData