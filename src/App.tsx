import React from 'react';
import './App.css';


import TheMovieDB from './API/TheMovieDB';


class App extends React.Component {

state = {movies: [], selectedMovie: null}

upcoming_Movies = async ()=>{
const response = await TheMovieDB.get('/movie/upcoming')
this.setState({
  movies: response.data.results,
})
}

  top_Rated = async ()=>{
    const response = await TheMovieDB.get('/tv/top_rated')
    this.setState({
      movies: response.data.results,
    })
  }

  popular_Movies = async ()=>{
    const response = await TheMovieDB.get('/movie/popular')
    this.setState({
      movies: response.data.results,
    })
  }

render() {
  return (    
    <div className="App">
      <header className="App-header">


<button onClick={this.upcoming_Movies}>UP_COMING</button>
<button onClick={this.top_Rated} className='ui button secondary'>TOP_RATED</button>
<button onClick={this.popular_Movies}>POPULAR_MOVIES</button>


      </header>
    </div>
  );
}

}


export default App;