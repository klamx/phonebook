function Form (props) {
  return (
    <form onSubmit={props.handleInput}>
      <div>
        name:{' '}
        <input
          type='text'
          placeholder='name'
          value={props.newName}
          onChange={props.handleNewName}
        />
      </div>
      <div>
        number:{' '}
        <input
          type='text'
          placeholder='number'
          value={props.newNumber}
          onChange={props.handleNewNumber}
        />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}

export default Form
