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

export const show = (notification) => {
  return {
    type: 'SHOW',
    data: { notification }
  }
}

export const hide = () => {
  return {
    type: 'HIDE'
  }
}
 
export default reducer