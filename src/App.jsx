import { useState } from 'react'

function App () {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newPerson, setNewPerson] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    setPersons([...persons, { name: newPerson }])
    setNewPerson('')
  }

  const handleNewPerson = (e) => {
    setNewPerson(e.target.value)
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
            value={newPerson}
            onChange={handleNewPerson}
          />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <li key={person.name}>{person.name}</li>
      })}
    </div>
  )
}

export default App
