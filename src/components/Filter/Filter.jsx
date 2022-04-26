function Filter (props) {
  return (
    <div>
      filter shown with:{' '}
      <input
        type='text'
        placeholder='Search'
        value={props.search}
        onChange={props.handleSearchData}
      />
    </div>
  )
}

export default Filter
