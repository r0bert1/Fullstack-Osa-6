import React from 'react'
import { connect } from 'react-redux'
import { applyFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.dispatch(
      applyFilter(event.target.value.toLowerCase())
    )
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect()(Filter)