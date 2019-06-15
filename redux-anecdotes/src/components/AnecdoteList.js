import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { show , hide } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes

  const vote = (id) => {
    props.store.dispatch(
      voteFor(id)
    )

    const anecdote = anecdotes.find((a) => a.id === id) 

    props.store.dispatch(
      show(`you voted for '${anecdote.content}'`)
    )

    setTimeout(() => {
      props.store.dispatch(
        hide()
      )
    }, 5000);
  }

  return (
    <div>
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
    </div>
  )
}

export default AnecdoteList