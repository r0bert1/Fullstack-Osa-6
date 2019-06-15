const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.filter
    default:
      return state
  }
}

export const applyFilter = (filter) => {
  return {
    type: 'FILTER',
    data: {filter}
  }
}

export default reducer
