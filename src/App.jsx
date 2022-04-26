import { useState } from 'react'

function App () {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    const person = persons.find((person) => {
      return person.name.toLowerCase() === newName.toLowerCase()
    })

    const number = persons.find((person) => {
      return person.number === newNumber
    })

    if (newNumber === '' || newName === '') {
      alert("name and number can't be empty")
      return
    }

    if (person && number) {
      alert(`${newName} and ${newNumber} are already added to phonebook`)
      return
    } else if (number) {
      alert(`${newNumber} is already added to phonebook`)
      return
    } else if (person) {
      alert(`${newName} is already added to phonebook`)
      return
    }

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleInput}>
        <div>
          name:{' '}
          <input
            type='text'
            placeholder='name'
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          number:{' '}
          <input
            type='text'
            placeholder='number'
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} - {person.number}
          </p>
        )
      })}
    </div>
  )
}

export default App
