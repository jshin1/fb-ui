const initialState = {
  home: true
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'SET_HOME':
      return {home: action.payload}
    default:
      return initialState
  }
}
