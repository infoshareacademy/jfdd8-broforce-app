import React, {Component} from 'react';
import { signOut} from "../../state/auth";
import { connect } from 'react-redux';

class LogOut extends Component {
  render() {
    return (
      <div>
        {firebase.auth().currentUser.email}
        <button
          onClick={() => signOut}
        >
          Wyloguj
        </button>

      </div>
  );
  }
}

export default connect(
  null,
  {signOut}
)(LogOut)

