import React, {Component} from 'react'
import PersonItem from "./PersonItem";
import NavigationBar from "./NavigationBar"

class PersonScreen extends Component {


  render() {
      return (
        <div>
          <NavigationBar/>,
          <PersonItem/>
        </div>
      )
    }
}
export default PersonScreen