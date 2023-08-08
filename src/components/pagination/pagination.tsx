import React from "react";
import * as Styled from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <div>
      <Styled.ButtonBox>
        <Styled.Button
          disabled={currentPage === 1}
          onClick={onPreviousPage}
        >
          Previous
        </Styled.Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Styled.Button onClick={onNextPage}>Next</Styled.Button>
      </Styled.ButtonBox>
    </div>
  );
};

export default Pagination;