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

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: { anecdote }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: { anecdotes }
  }
}

export default reducer