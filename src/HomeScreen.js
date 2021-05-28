import React from 'react'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Row from './components/Row'
import './HomeScreen.css'
import requests from './Request'
function HomeScreen() {
    return (
        <div className="homeScreen">
           {/* Nav */}
           <NavBar/>
           {/* Banner */}
            <Banner/>
           {/* Row */}
           <Row
           title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow
           />
           <Row
           title="Trending Now" fetchUrl={requests.fetchTrending}
           />
           <Row
           title="Top Rated" fetchUrl={requests.fetchTopRated}
           />
           <Row
           title="Action Movies" fetchUrl={requests.fethActionMovies}
           />
           <Row
           title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
           />
           <Row
           title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
           />
           <Row
           title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
           />
           <Row
           title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}
           />
        </div>
    )
}

export default HomeScreen
