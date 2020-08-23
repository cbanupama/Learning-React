import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"asdf", name:"Anu", age:"26"},
      {id:"zxcv", name:"Shwetha", age:"24"},
      {id:"qwer", name:"Yashu", age:"17"}
    ],
    otherState: 'some other value',
    showPersons : false
  }

  deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }

togglePersonsHandler = () => {
  const doesItWork = this.state.showPersons;
  this.setState({showPersons: !doesItWork});

}
  switchNameHandler = () => {
   this.setState({
    persons: [
      {name:"Anupama", age:"26"},
      {name:"Shwetha", age:"24"},
      {name:"Yashu", age:"18"}
    ]
   })
  }

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name:"Anupama", age:"26"},
      {name:event.target.value, age:"24"},
      {name:"Yashu", age:"18"}
    ]
  })
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =(
      <div>
      {this.state.persons.map((person, index) => {
          return <Person
           click={() => this.deletePersonHandler(index)} 
           name = {person.name} 
           age = {person.age}
           key = {person.id} />
      })}
      </div>);
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is Really Working</p>
        <button style={style}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
      {persons}
      </div>
    );
  }
}

export default App;

 // Using props, state and hooks 
 //  const app = props =>{
 //   const [personsState, setPersonsState] = useState({
 //    persons: [
 //      {
 //        name:"Anu", age:"26"
 //      },
 //      {
 //        name:"Shwetha", age:"24"
 //      },
 //      {
 //        name:"yashu", age:"17"
 //      },
 //    ],
 //    otherState: 'some other value'
 //  });

 //  const swithNameHandler = () => {
 //    // console.log("was Clicked");
 //    // this.state.persons[0].name = "Anupama";
 //    setPersonsState({
 //       persons: [
 //        {
 //        name:"Anupama", age:"26"
 //        },
 //        {
 //        name:"Shwetha", age:"24"
 //        },
 //        {
 //        name:"yashu", age:"18"
 //        },
 //      ]
 //    });
 // };
 //    return (
 //      <div className="App">
 //        <h1>Hi, I'm a React App</h1>
 //        <p>This is really working!!!</p>
 //        <button onClick={swithNameHandler}>Switch Name</button>
 //        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
 //        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>"My Hobbies are Reading Blogs."</Person>
 //        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
 //      </div>
 //    );
 //    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it Work?'));
 //  }


// export default app;


