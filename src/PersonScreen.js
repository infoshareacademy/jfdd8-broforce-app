import React, {Component} from 'react'
import PersonItem from "./PersonItem";
import NavigationBar from "./NavigationBar"

class PersonScreen extends Component {

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
        <NavigationBar/>,
        <PersonItem/>
      </div>

    )
  }
}

export default PersonScreen