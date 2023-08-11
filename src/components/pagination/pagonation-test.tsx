import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Pagination from './pagination'

describe('Pagination', () => {
  it('should call onNextPage when Next button is clicked', () => {
    // Arrange
    const onNextPageMock = jest.fn()
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onNextPage={onNextPageMock}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onPreviousPage={() => {}}
      />
    )
    const nextButton = getByText(/next/i)

    // Act
    fireEvent.click(nextButton)

    // Assert
    expect(onNextPageMock).toHaveBeenCalledTimes(1)
  })

  it('should call onPreviousPage when Previous button is clicked', () => {
    // Arrange
    const onPreviousPageMock = jest.fn()
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={3}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onNextPage={() => {}}
        onPreviousPage={onPreviousPageMock}
      />
    )
    const previousButton = getByText(/previous/i)

    // Act
    fireEvent.click(previousButton)

    // Assert
    expect(onPreviousPageMock).toHaveBeenCalledTimes(1)
  })

  it('should disable Previous button on first page', () => {
    // Arrange
    const { getByText } = render(
      <Pagination
        currentPage={1}
        totalPages={3}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onNextPage={() => {}}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onPreviousPage={() => {}}
      />
    )
    const previousButton = getByText(/previous/i)

    // Assert
    expect(previousButton).toBeDisabled()
  })
})
