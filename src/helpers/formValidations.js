const formValidations = (newNumber, newName, person, number) => {
  if (newNumber === '' || newName === '') {
    alert("name and number can't be empty")
    return
  }

  if (person && number) {
    alert(`${newName} and ${newNumber} are already added to phonebook`)
  } else if (number) {
    alert(`${newNumber} is already added to phonebook`)
  } else if (person) {
    alert(`${newName} is already added to phonebook`)
  }
}

export default formValidations
