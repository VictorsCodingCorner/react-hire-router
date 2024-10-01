import { useState, useEffect } from 'react'
import './App.css'
import PersonProfile from './pages/PersonProfile/index'
import Dashboard from './pages/Dashboard/index'
import { Route, Routes, Link } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])


  const URL = 'https://randomuser.me/api/?results=50';

  const fetchPeople = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setPeople(jsonData.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
          <Link to="/">Dashboard</Link>
        </nav>
      </header>
      <main>
        <Routes>
        <Route 
          path='/' 
          element={
            <Dashboard people={people} 
            hiredPeople={hiredPeople}
          />}
        ></Route>
        <Route 
          path='/View/:id' 
          element={
            <PersonProfile people = {people} 
            hiredPeople = {hiredPeople} 
            setHiredPeople={setHiredPeople}
            />}>
          </Route>
        </Routes>

      </main>
    </>
  )
}
