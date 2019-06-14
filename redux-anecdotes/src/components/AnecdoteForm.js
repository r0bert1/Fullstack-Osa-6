import React from 'react'
import { createNote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      createNote(event.target.anecdote.value)
    )
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote"/>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm