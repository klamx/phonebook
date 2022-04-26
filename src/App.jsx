import { useState } from 'react'

function App () {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newPerson, setNewPerson] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    const person = persons.find((person) => {
      return person.name.toLowerCase() === newPerson.toLowerCase()
    })

    if (person) {
      alert(`${newPerson} is already added to phonebook`)
      return
    }
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
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App
