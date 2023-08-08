import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Message = styled.div`
  font-size: 16px;
  color: #333;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
`;

export const ListBox = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const Item = styled.div`
text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  text-align: center;
  border: 1px solid #d6ccc2;
  border-radius: 10px;
  padding: 11px 24px;
  height: 5vh;
  width: 15vh;
  color: #202223;
  background: #ffffff;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;

  &:hover {
    background: #f6f6f7;
    outline: 1px solid transparent;
  }
`;

export const ButtonBox = styled.div`
    display: flex;
   justify-content: space-around;
   padding-top: 30px;
   padding-bottom: 30px;
}`;