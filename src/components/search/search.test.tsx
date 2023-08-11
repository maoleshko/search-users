import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from './search'

describe('Search', () => {
  it('should call the onSearchTermChange callback with the correct search term', () => {
    // Создайте mock-функцию для колбэка onSearchTermChange
    const mockOnSearchTermChange = jest.fn()

    // Рендер компонента Search с передачей mock-функции в пропс onSearchTermChange
    const { getByPlaceholderText, getByText } = render(
      <Search onSearchTermChange={mockOnSearchTermChange} />
    )

    // Получите поле ввода по атрибуту placeholder и симулируйте изменение значения
    const input = getByPlaceholderText('Enter username')
    fireEvent.change(input, { target: { value: 'test' } })

    // Нажмите на кнопку "Search"
    const searchButton = getByText('Search')
    fireEvent.click(searchButton)

    // Проверьте, что mock-функция была вызвана с ожидаемым значением
    expect(mockOnSearchTermChange).toHaveBeenCalledWith('test')
  })
})
