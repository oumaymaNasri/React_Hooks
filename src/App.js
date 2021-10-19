import react, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import Search from './components/Search';


function App() {
  const [keyword, setKeyword] = useState("")
  const [newRate, setnewRate] = useState(1)
  const [movies,setMovies] = useState([
  {
    "title": "Star Wars",
    "year": "2017",
    "type": "movie",
    "urlPoster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    "description":"The story of the original trilogy focuses on Luke Skywalker's quest to become a Jedi, his struggle with the evil Imperial agent Darth Vader, and the struggle of the Rebel Alliance to free the galaxy from the clutches of the Galactic Empire",
    "rate":"4"
  },
{
  "title": "The rise of SkyWalkea",
  "year": "2019",
  "type": "movie",
  "urlPoster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
  "description":"the film features two brothers and their friends who travel to an island cabin the brothers inherited from their recently deceased uncle for a relaxing weekend getaway",
  "rate":"2"
},
{
  "title": "Solo",
  "year": "2018",
  "type": "movie",
  "urlPoster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
  "description":"The film explores the early adventures of Han Solo and Chewbacca, who join a heist within the criminal underworld 10 years prior to the events of the original Star Wars",
  "rate":"3"
},
{
  "title": "The Phantom Menace",
  "year": "1999",
  "imdbID": "tt0120915",
  "type": "movie",
  "urlPoster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "description":"When the evil Trade Federation plots to take over the peaceful planet of Naboo, Jedi warrior Qui-Gon Jinn and his apprentice Obi-Wan Kenobi set ...",
  "rate":"5"
},
])

const search=(text)=> {
  setKeyword(text)
}

const searchRate=(rateValue)=>{
  setnewRate(rateValue)
}

const addMovie=(movie)=>{
  setMovies(movies.concat(movie))
}

  return (
    <div className="App">
    <Header text="React movie app" />
    <Search search={search} searchRate={searchRate} newRate={newRate}/>
    <div classname="container">
      <div >
      <MoviesList addMovie={addMovie} movies={movies.filter( el=> el.rate>=newRate && el.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
      </div>
    </div>
  </div>
  );
}

export default App;
