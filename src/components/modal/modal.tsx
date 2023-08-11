import React, { MouseEvent } from 'react'
import { User } from '../../types/data'
import * as Styled from './styles'

interface ModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
  user: User | null
}

function Modal({ showModal, onClose, user }: ModalProps): JSX.Element | null {
  const handleClose = () => {
    onClose()
  }

  const handleClickOutside = () => {
    handleClose()
  }

  const handleClickInside = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!showModal || !user) {
    return null
  }

  return (
    <Styled.Container
      data-testid="modal-container"
      onClick={handleClickOutside}
    >
      <Styled.Content onClick={handleClickInside}>
        <Styled.Header>User Info</Styled.Header>
        <Styled.UserInfo>
          <Styled.Image src={user.avatar_url} alt="user" />
          <Styled.TextBox>
            <Styled.Text>Username: {user.login}</Styled.Text>
            <Styled.Text>
              <a href={user.html_url} target="_blank" rel="noreferrer noopener">
                Go to profile
              </a>
            </Styled.Text>
          </Styled.TextBox>
        </Styled.UserInfo>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Modal
