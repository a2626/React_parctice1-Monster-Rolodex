import React,{Component} from 'react';
import './App.css';
import './components/card-list/card-list-component';
import {CardList} from "./components/card-list/card-list-component";
import {SearchBox} from "./components/searchBox/searchBox-component";

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''


    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(users=>this.setState({monsters:users}));
  }

  render(){
      const {monsters,searchField} = this.state;
      const filterMonster = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return (
          <div className="App">
            <h1>Monster Rolodex </h1>
            <SearchBox
                placeholder='Search for monster'
                handleChange={e => this.setState({searchField:e.target.value})}
            />

          <CardList monsters={filterMonster}>


          </CardList>

        </div>

    );
  }



}


export default App;
