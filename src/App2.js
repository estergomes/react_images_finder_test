import React from 'react';
import './App.css';
import imgPoster from './load.gif';

import Input from './components/Input';
import Movies from './components/Movies';

const API_KEY = '4fd21453';
// fetch(`http://www.omdbapi.com/?t=HArry+Potter&apikey=${API_KEY}`)

class App extends React.Component {
  constructor(props) {
    super(props);

    // Title, Year, Genre, Poster, imdbRating
    this.state = {
      isLoaded: false,
      title: undefined,
      year: undefined,
      genre: undefined,
      poster: undefined,
      rate: undefined,
      movies: '',
      inputValue: ''
    };
  }

  getInput(e) {
    e.preventDefault();
    const el = e.target.elements.inputMovie.value;
    console.log(el);
    this.setState({
      inputValue: el
    })
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?t=${inputValue}&apikey=${API_KEY}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => this.setState({
        isLoaded: true,
        title: json.Title,
        year: json.Year,
        genre: json.Genre,
        poster: json.Poster,
        rate: json.imdbRating
      }));
  }

  render() {
    const { isLoaded, title, year, genre, poster, rate, gif } = this.state;

    return (
      <div className="App">
        <Input onSubmit={this.getInput}/>
          {
            !isLoaded ?
            <div className="Card">
              <Movies
                isLoaded={isLoaded}
                title={title}
                year={year}
                genre={genre}
                poster={poster}
                rate={rate}
              />
            </div>
            :
            <div>Loading...</div>
          }
      </div>
    );
  }
}


export default App;
