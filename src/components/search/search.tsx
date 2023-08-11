import React, { ChangeEvent, useState } from 'react'
import * as Styled from './styles'

interface SearchProps {
  onSearchTermChange: (searchTerm: string) => void
}

function Search({ onSearchTermChange }: SearchProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearchTermChange(searchTerm)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Styled.Container>
      <h1>GitHub Users</h1>
      <Styled.SearchTerm
        type="search"
        placeholder="Enter username"
        name="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Styled.Button onClick={handleSearch}>Search</Styled.Button>
    </Styled.Container>
  )
}

export default Search