import React, { useState } from "react";
import * as Styled from "./styles";

interface SortProps {
  onSort: (order: "desc" | "asc") => void;
}

function Sort({ onSort }: SortProps): JSX.Element {
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const handleSort = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <Styled.SortBox>
      <Styled.ButtonBox>
        <Styled.Button onClick={handleSort}>
          {order === "desc" ? "repositories ↓" : "repositories ↑"}
        </Styled.Button>
      </Styled.ButtonBox>
    </Styled.SortBox>
  );
}

export default Sort;