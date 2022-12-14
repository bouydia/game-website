const initialState = {
    game: {platforms:[]},
    screen: { results: [] },
    isLoading:true
    
}

 const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
        case 'LOAD_DETAIL':
            return {
              isLoading: true,
            }
        default: 
             return { ...state }
    }
}
export default detailReducer ;  