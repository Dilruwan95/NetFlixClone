import React from 'react';
import './App.css'
import Row from './Component/Row';
import Requests from './Requests';
import Banner from './Component/Banner';
import Nav from './Component/Nav';



function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row 
         title="NETFLIX ORIGINAL"  
         fetchUrl={Requests.fetchNetflixOriginals}
         isLargeRow ={true}
         ></Row>
      <Row title="Trending now"  fetchUrl={Requests.fetchTrending}></Row> 
      <Row title="Top Rated"  fetchUrl={Requests.fetchTopRated}></Row>
      <Row title="Action Movies"  fetchUrl={Requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies"  fetchUrl={Requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies"  fetchUrl={Requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies"  fetchUrl={Requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries"  fetchUrl={Requests.fetchDocumentaries}></Row>
    </div>
  )
}

export default App
