import React, {Component} from 'react'
import firebase from 'firebase'

class LogOut extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => firebase.auth().signOut()}
        >
          Sign out
        </button>
      </div>
  )
  }
}

export default LogOut

