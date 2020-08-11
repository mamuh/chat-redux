export default function(state, action) {
  if (state === undefined) {
    return "anonymous"
  }
  switch(action.type) {
    case 'SET_USERNAME':
      return action.payload
    default:
      return state
  }
}
