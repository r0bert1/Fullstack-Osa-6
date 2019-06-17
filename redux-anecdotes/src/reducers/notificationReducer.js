const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.data.notification
    case 'HIDE':
      return ''
    default:
      return state
  }
}

export const setNotification = (notification, duration) => {
  return async dispatch => {
    dispatch({
      type: 'SHOW',
      data: { notification }
    })
    setTimeout(() => {
      dispatch({
        type: 'HIDE'
      })
    }, duration * 1000)
  }
}
 
export default reducer