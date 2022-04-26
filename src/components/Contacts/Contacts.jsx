function Contacts (props) {
  return (
    <>
      {props.persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} - {person.number}
          </p>
        )
      })}
    </>
  )
}

export default Contacts
