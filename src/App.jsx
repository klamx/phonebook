import { useState, useEffect } from 'react'
import Form from './components/Form/Form'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import formValidations from './helpers/formValidations'
import axios from 'axios'

function App () {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    const person = persons.find((person) => {
      return person.name.toLowerCase() === newName.toLowerCase()
    })

    const number = persons.find((person) => {
      return person.number === newNumber
    })

    if (formValidations(newNumber, newName, person, number)) return

    setPersons([...persons, { name: newName, number: newNumber }])
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchData = (e) => {
    setSearch(e.target.value)
  }

  const shownData =
    search !== ''
      ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
      : persons

  useEffect(() => {
    const getData = async () => {
      const data = await axios('http://localhost:3001/persons')
      return data
    }
    getData().then(({ data }) => {
      setPersons(data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchData={handleSearchData}></Filter>
      <h2>Add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleInput={handleInput}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Contacts persons={shownData} />
    </div>
  )
}

export default App
