import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  width: 80%;
  margin: 120px auto; /* 헤더와의 간격 추가 */
`;
export const Poster = styled.img`
  border-radius: 20px;
  max-width: 70%;
  place-self: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;
