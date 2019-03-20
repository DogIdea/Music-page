const initialState={
    personalizedsongs:{},
    topplaylist:{},
    personalizeddj:{},
    personalizedprogram:{}
}


const homeData = (state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case 'PERSONALIZED_SONGS':
            return {
                ...state,
                personalizedsongs:action.personalizedsongs
            }
        case 'TOP_PLAYLIST':
            return {
                ...state,
                topplaylist:action.topplaylist
            }
        case 'PERSONALIZE_Dj':
            return {
                ...state,
                personalizeddj:action.personalizeddj
            }
        case 'PERSONALIZED_PROGRAM':
            return {
                ...state,
                personalizedprogram:action.personalizedprogram
            }   
        default:
            return state
    }
}

export default homeData