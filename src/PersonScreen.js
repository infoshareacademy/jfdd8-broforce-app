import React from 'react'

class PersonScreen extends React.Component {

  state = {
    personFormInput: '',
    people: [
        {
          id:'',
          name:''
        }
    ]
  };

    componentWillMount() {
        this.setState({
            people: JSON.parse(localStorage.getItem('people')) || []
        })
    }

    componentDidUpdate() {
        localStorage.setItem('people', JSON.stringify(this.state.people));
    }


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


  render() {
    let y = JSON.parse(localStorage.getItem('people'));
    if (y === undefined) {
      localStorage.setItem('people', '[{"Adaś Żarłoczek"}]')
    }

    return (
      <div>
        <ul>
          {
            this.state.people.map(
              person => (
                <li key={person.id}>
                  {person.name}
                </li>
              )
            )
          }
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.personFormInput}
            onChange={this.handleChange}
          />
        </form>
        <button>Dodaj ziomka</button>


      </div>

    )
  }
}

export default PersonScreen