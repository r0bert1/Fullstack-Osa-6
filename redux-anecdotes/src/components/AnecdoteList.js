import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.visibleAnecdotes

  const vote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id)
    const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    props.voteFor(changedAnecdote)
    props.setNotification(`you voted for '${anecdote.content}'`, 5)
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

const anecdotesToShow = ({ anecdotes , filter }) => {
  if (filter === '') {
    return anecdotes
  }
  
  return anecdotes.filter(a => a.content.toLowerCase().indexOf(filter) !== -1)
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteFor,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)