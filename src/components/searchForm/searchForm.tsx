import { useState } from 'react'
import Search from '../search/search'
import UserList from '../userList/userList'
import Sort from '../sort/sort'
import * as Styled from './styles'

function SearchForm(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<string>('')

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order)
  }

  return (
    <Styled.Container>
      <Search onSearchTermChange={setSearchTerm} />
      <Sort onSort={handleSortOrderChange} />
      <Styled.ListBox>
        <UserList userName={searchTerm} order={sortOrder} />
      </Styled.ListBox>
    </Styled.Container>
  )
}

export default SearchForm