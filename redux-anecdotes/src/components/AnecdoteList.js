import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { show , hide } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const { anecdotes , filter } = props.store.getState()

  const anecdotesToShow = () => {
    if (filter === '') {
      return anecdotes
    }
    
    return anecdotes.filter(a => a.content.toLowerCase().indexOf(filter) !== -1)
  }

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
      {anecdotesToShow().map(anecdote =>
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