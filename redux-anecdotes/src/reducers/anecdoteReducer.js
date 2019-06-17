import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      const newState = state.map(note =>
        note.id !== id ? note : changedAnecdote
      )
      return newState.sort((a, b) => b.votes - a.votes)

    case 'NEW_ANECDOTE':
      const newAnecdote = {
        content: action.data.anecdote.content,
        votes: 0,
        id: action.data.anecdote.id
      }
      return [...state, newAnecdote]
    case 'INIT_ANECDOTES':
      return action.data.anecdotes
    default: 
    return state
  }
}

export const voteFor = anecdote => {
  return async dispatch => {
    const changedAnecdote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      data: { id: changedAnecdote.id }
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: { anecdote: newAnecdote }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: { anecdotes },
    })
  }
}

export default reducer