import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { show , hide } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const { anecdotes , filter } = props

  const anecdotesToShow = () => {
    if (filter === '') {
      return anecdotes
    }
    
    return anecdotes.filter(a => a.content.toLowerCase().indexOf(filter) !== -1)
  }

  const vote = (id) => {
    props.dispatch(
      voteFor(id)
    )

    const anecdote = anecdotes.find((a) => a.id === id)

    props.dispatch(
      show(`you voted for '${anecdote.content}'`)
    )

    setTimeout(() => {
      props.dispatch(
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(AnecdoteList)