import React, {Component} from 'react'


class PersonItem extends Component {

  state = {
    personFormInput: '',
    people: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addPerson(
      this.state.personFormInput
    );
    this.setState({
      personFormInput: ''
    })
  };

  handleChange = (event) => {
    this.setState({
      personFormInput: event.target.value
    })
  };

  addPerson = (personName) => {
    this.setState({
      people: this.state.people.concat({
        id: this.state.people.map(
          task => task.id).reduce(
          (biggest, next) => Math.max(biggest, next), 0) + 1,
        name: personName
      })
    })
  };

  componentWillMount() {
    this.setState({
      people: JSON.parse(localStorage.getItem('people')) || []
    })
  }

  componentDidUpdate() {
    localStorage.setItem('people', JSON.stringify(this.state.people));
  }

  handleAddToOrderList = event => {
event.preventDefault();

console.log('no dodaj go!')
  };

  render() {

    const blankStateMsg = (
      <p>nie masz kolegów</p>
    );

    const list = (
      <ul>
        {
          this.state.people.map(
            person => (
              <li key={person.id}>
                {person.name}
                <button
                onClick={this.handleAddToOrderList}
                >+</button>
              </li>
            )
          )
        }
      </ul>
    );

    const form = (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.personFormInput}
            onChange={this.handleChange}
          />
        </form>
        <button>Dodaj ziomka</button>
      </div>
    );

    return (
      <div>
        {form}
        {
          this.state.people.length === 0 ?
            blankStateMsg : list
        }
      </div>
    )
  }
}

export default PersonItem