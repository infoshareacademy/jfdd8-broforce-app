import React from 'react'

class PersonScreen extends React.Component {

  state = {
    personFormInput: ''
  };

  handleSubmit = (event) =>{
    event.preventDefault();
    this.addPerson(

    );
    this.setState({
      personFormInput: ''
    })
  };

  render() {
    return (
      <div>

        <ul>
          <li>

          </li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input/>
        </form>
        <button>Dodaj ziomka</button>







      </div>

    )
  }
}

export default PersonScreen