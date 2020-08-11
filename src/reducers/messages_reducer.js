export default function(state, action) {
  if (state === undefined) {
    return []
  }
  switch(action.type) {
    case 'FETCH_MESSAGES':
      return action.payload
    case 'CLEAR_MESSAGES':
      return action.payload
    case 'POST_MESSAGE':
      return [
        ...state, {
          "id": action.payload.id,
          "author": action.payload.author,
          "content": action.payload.content,
          "channel": action.payload.channel,
          "created_at": action.payload.created_at,
          "updated_at": action.payload.updated_at
        }
      ]
    default:
      return state
  }
}
