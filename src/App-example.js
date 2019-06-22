import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Input from './components/Input';
import Content from './components/Content';

// apikey
const API_KEY = '8c08xt91Q4E7qvrKagQ8MKDaWotqT9BZ';

class App extends Component {

  state = {
    author: undefined,
    title: undefined,
    summary: undefined,
    url: undefined,
    error: undefined,
    isLoaded: false,
    models: []
  }

  getData = async (e) => {
    e.preventDefault();
    const el = e.target.elements.book.value;
    // console.log(el);

    const api_call = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${el}&api-key=${API_KEY}`);

    const data = await api_call.json();
    const results = data.results; //todos resultados
    console.log(results[0]); //apenas o primeiro

      el ?
      this.setState({
        author: results[0].book_author,
        title: results[0].book_title,
        summary: results[0].summary,
        url: results[0].url,
        error: "",
        isLoaded: true,
        models: results
      }) :
      this.setState({
        author: results[0].book_author,
        title: results[0].book_title,
        summary: results[0].summary,
        url: results[0].url,
        error: "Please, enter a value"
      });
  }

  render() {
    const { isLoaded } = this.state;

    if(!isLoaded) {
      return <div className="App">
              <Header />
              <Input getData={this.getData}/>
            </div>
    }

    return (
      <div className="App">
        <Header />
        <Input getData={this.getData}/>
        <div>
          <Content
              author={this.state.author}
              title={this.state.title}
              summary={this.state.summary}
              url={this.state.url}
              error={this.state.error}
              isLoaded={this.state.isLoaded}
          />
        </div>
      </div>
    ); 
  }
}

export default App;

