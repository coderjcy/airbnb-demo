

const initialState = {
  banner: [1, 2, 3]
}

function reducer(state = initialState, action) {


  switch (action.type) {
    case 'change_banner':
      return 12
    default:
      return state
  }
}


export default reducer
