import React from 'react'
import { createNote } from '../reducers/anecdoteReducer'
import { show , hide } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value

    props.store.dispatch(
      createNote(anecdote)
    )

    props.store.dispatch(
      show(`you added '${anecdote}'`)
    )

    setTimeout(() => {
      props.store.dispatch(
        hide()
      )
    }, 5000);
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