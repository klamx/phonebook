const formValidations = (newNumber, newName, person, number) => {
  if (newNumber === '' || newName === '') {
    alert("name and number can't be empty")
    return true
  }

  if (person && number) {
    alert(`${newName} and ${newNumber} are already added to phonebook`)
    return true
  } else if (number) {
    alert(`${newNumber} is already added to phonebook`)
    return true
  } else if (person) {
    alert(`${newName} is already added to phonebook`)
    return true
  }

  return false
}

export default formValidations
