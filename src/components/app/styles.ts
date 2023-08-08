import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #dcdcdc;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ListBox = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;