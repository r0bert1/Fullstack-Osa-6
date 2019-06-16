import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../reducers/anecdoteReducer'
import { show , hide } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value

    props.dispatch(
      createNote(anecdote)
    )

    props.dispatch(
      show(`you added '${anecdote}'`)
    )

    setTimeout(() => {
      props.dispatch(
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

export default connect()(AnecdoteForm)