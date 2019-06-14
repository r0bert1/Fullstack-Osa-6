import React from 'react'
import { voteFor, createNote } from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()
  
  const vote = (id) => {
    props.store.dispatch(
      voteFor(id)
    )
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      createNote(event.target.anecdote.value)
    )
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote"/>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
