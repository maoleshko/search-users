import { render, fireEvent } from '@testing-library/react'
import Sort from './sort'

describe('Sort', () => {
  it('should call onSort with correct order when button is clicked', () => {
    // Arrange
    const onSortMock = jest.fn()
    const { getByText } = render(<Sort onSort={onSortMock} />)
    const button = getByText(/repositories/i)

    // Act
    fireEvent.click(button)

    // Assert
    expect(onSortMock).toHaveBeenCalledTimes(1)
    expect(onSortMock).toHaveBeenCalledWith('asc')
  })

  it('should update button label when order changes', () => {
    // Arrange
    const onSortMock = jest.fn()
    const { getByText, rerender } = render(<Sort onSort={onSortMock} />)
    const button = getByText(/repositories/i)

    // Act
    fireEvent.click(button)

    // Assert
    expect(button.textContent).toBe('repositories ↑')

    // Act
    rerender(<Sort onSort={onSortMock} />)
    fireEvent.click(button)

    // Assert
    expect(button.textContent).toBe('repositories ↓')
  })
})
