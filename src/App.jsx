import ApiSwapi from './Pages/Apiswapi/ApiSwapi'
import NavBar from './components/NavBar'
import People from './Pages/people/People'
import React, { useState, useEffect } from 'react'
import './App.css'
import { Container ,Dimmer, Loader } from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json()
      setPeople(data.results)
      setLoading(false)
    }

    fetchPeople()
  }, [])

  return (  
    <Router>
      <NavBar />
        
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Carregando</Loader>
        </Dimmer>
      ) : (
        <Routes>
        <Route path='/' element={<ApiSwapi/>}/>
        <Route path='/people' element={<People data={people}/>}/>
      </Routes>
      )
    }
    </Router>
  )
}

export default App
