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

    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    handleFirstNameChange(event) {
        const newPerson = this.state.newPerson;
        newPerson.firstName = event.target.value;
        this.setState({newPerson});
    }

    handleLastNameChange(event) {
        const newPerson = this.state.newPerson;
        newPerson.lastName = event.target.value;
        this.setState({newPerson});
    }

    handleAgeChange(event) {
        const newPerson = this.state.newPerson;
        newPerson.age = event.target.value;
        this.setState({newPerson});
    }

    componentDidMount() {
        this.retrievePeople();
    }

    retrievePeople = () => {
        axios.get('http://localhost:8080/people/getPeople')
            .then(response => {
                this.setState({
                    people: response.data
                })
            })
            .catch( err => {
                console.error(err);
            })
    }

    addNewPersonHandler = (event) => {
        console.log('this.state.newPerson');
        console.log(this.state.newPerson);
        axios.post('http://localhost:8080/people/person', this.state.newPerson)
            .then(response => console.log(response.data))
            .then(this.retrievePeople);
    }

  render() {
    return (
      <div className="App">
          <div>
              <input type="text" name="firstName" value={this.state.newPerson.firstName} onChange={this.handleFirstNameChange}/>
              <input type="text" name="lastName" value={this.state.newPerson.lastName} onChange={this.handleLastNameChange} />
              <input type="text" name="age" value={this.state.newPerson.age}  onChange={this.handleAgeChange}/>
              <button onClick={this.addNewPersonHandler}>Add Person</button></div>
          <div>
              {this.state.people.map(function(person, index) {
                  return <Person key='100' firstName={person.firstName} lastName={person.lastName} age={person.age} />;
              })}
          </div>
      </div>
    );
  }
}

export default App;
