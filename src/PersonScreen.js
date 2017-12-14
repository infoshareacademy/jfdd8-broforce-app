import React from 'react'

class PersonScreen extends React.Component {

  state = {
    personFormInput: '',
    people: [
      {
        id: 1,
        name: 'Jacek'
      },
      {
        id: 2,
        name: 'Jacek'
      },
      {
        id: 3,
        name: 'Jacek'
      }
    ]
  };

  handleSubmit = (event) => {
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