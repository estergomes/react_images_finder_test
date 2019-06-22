import React from 'react';
import './App.css';

import Header from './components/Header';
import Input from './components/Input';
import Movies from './components/Movies';

const API_KEY = '4fd21453';
// fetch(`http://www.omdbapi.com/?t=HArry+Potter&apikey=${API_KEY}`)

class App extends React.Component {
  // Title, Year, Genre, Poster, imdbRating
  state = {
      isLoaded: false,
      title: undefined,
      year: undefined,
      genre: undefined,
      poster: undefined,
      rate: undefined,
      movies: '',
      inputValue: '',
      error: null
  }


  getInput = async (e) => {
    e.preventDefault();
    const el = e.target.elements.inputMovie.value;
    console.log(el);

    const api_call = await fetch(`http://www.omdbapi.com/?t=${el}&apikey=${API_KEY}`);

    const data = await api_call.json();
    console.log(data.Title);

    el ?
    this.setState({
      inputValue: el,
      isLoaded: true,
      title: data.Title,
      year: data.Year,
      genre: data.Genre,
      poster: data.Poster,
      rate: data.imdbRating
    }) :
    this.setState({
      inputValue: el,
      isLoaded: true,
      title: data.Title,
      year: data.Year,
      genre: data.Genre,
      poster: data.Poster,
      rate: data.imdbRating,
      error: null
    });
  }

  render() {
    const { isLoaded, title, year, genre, poster, rate, error } = this.state;

    return (
      <div className="App">
        <Header />
        <Input getInput={this.getInput}/>
          {
            isLoaded ?
            <div className="Card">
              <Movies isLoaded={isLoaded} title={title} year={year} genre={genre} poster={poster} rate={rate}
              />
            </div>
            :
            <div>
              {error}
            </div>
          }
      </div>
    );
  }
}

export default App;
