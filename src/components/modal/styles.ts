import styled from "styled-components";

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  margin: 15% auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  width: 550px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ModalHeader = styled.h4`
  color: #000;
  font-size: 32px;
  line-height: 40px;
  margin-left: 30px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  gap:10px;
  margin-bottom: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ModalImage = styled.img`
  max-width: 40%;
  max-height: 350%;
  padding-top: 10px;
  width: 205px;
  height: 215px;
`;

export const ModalText = styled.p`
  margin-top:15px;
  font-size: 16px;
`;