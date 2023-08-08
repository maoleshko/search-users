import { useState } from "react";
import * as Styled from "./styles";
import Modal from "../modal/modal";
import { useGetUserQuery } from "../../redux/usersApi";
import { User } from "../../types/data";
import { UserListProps } from "../../types/data";
import Pagination from "../pagination/pagination";

function UserList({ userName, order }: UserListProps): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetUserQuery(
    { userName, order, page: currentPage },
    { skip: !userName }
  );

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const totalPages = Math.ceil(data?.total_count / 30);

  if (isLoading) {
    return <Styled.Message>Loading...</Styled.Message>;
  }

  if (!isLoading && data?.items.length === 0) {
    return <Styled.Message>No results found</Styled.Message>;
  }

  return (
    <Styled.Container>
      <Styled.ListBox>
        {data?.items.map((user: User) => (
          <Styled.Item>
            <div onClick={() => handleOpenModal(user)} key={user.id}>
              {user.login}
            </div>
          </Styled.Item>
        ))}
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            onClose={handleCloseModal}
            user={selectedUser}
          />
        )}
      </Styled.ListBox>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </Styled.Container>
  );
}

export default UserList;