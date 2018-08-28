import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import axios from 'axios';

class App extends Component {

    state = {
        people: [
        ],
        newPerson: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    componentDidMount() {
        this.retrievePeople();
    }

    retrievePeople = () => {
        axios.get('http://localhost:8080/people')
            .then(response => {
                this.setState({
                    people: response.data
                })
            })
    }

    addNewPersonHandler = (event) => {
        axios.post('http://localhost:8080/people', this.state.newPerson)
            .then(response => console.log(response.data))
            .then(this.retrievePeople);
    }

  render() {
    return (
      <div className="App">
          <div>
              <input type="text" name="firstName" />
              <input type="text" name="lastName" />
              <input type="text" name="age" />
              <button onClick={this.addNewPersonHandler}>Add Person</button></div>
          <div>
              <Person key='100' firstName='Keanu' lastName='Reeves' age='53' />
          </div>
      </div>
    );
  }
}

export default App;
