export function fetchMessages(channel) {
return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
    return {
      type: 'FETCH_MESSAGES',
      payload: data.messages
    }
    });
}

export function clearMessages() {
  return {
    type: 'CLEAR_MESSAGES',
    payload: []
  }
}

export function postMessage(content, author, channel) {
return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
      method: 'post',
      body: JSON.stringify({
        "author": author,
        "content": content
      })
    })
    .then(response => response.json())
    .then((data) => {
    return {
      type: 'POST_MESSAGES',
      payload: data
    }
    });
}

export function setUsername(username) {
  return {
    type: 'SET_USERNAME',
    payload: username
  }
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}
