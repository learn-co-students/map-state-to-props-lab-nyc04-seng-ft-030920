import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let userArray =  this.props.users.map(user => {
      return <li key={user.username}>{user.username}</li>
    })
    return (
      <div>
        <ul>
          Users!
          {userArray}
          {this.props.usercount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, usercount: state.users.length}
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
