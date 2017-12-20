import React, {Component} from 'react'
import PersonItem from "./PersonItem";
import NavigationBar from "./NavigationBar"

class PersonScreen extends Component {


  render() {
    let y = JSON.parse(localStorage.getItem('people'));
    if (y === undefined) {
      localStorage.setItem('people', '[{"Adaś Żarłoczek"}]')


      return (
        <div>
          <NavigationBar/>,
          <PersonItem/>
        </div>

      )
    }

  }
}
export default PersonScreen