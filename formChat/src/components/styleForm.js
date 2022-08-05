import styled from "styled-components";

export const Article = styled.article`
  min-height: 200px;
  max-width: 420px;
  margin: 50px auto;
`;
export const Error = styled.h3`
  color: red;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  border: 2px solid #cc6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`;

export const Submit = styled(Input)`
  width: 100%;
  background: #cc6666;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
`;

export const InfoView = styled.div`
  padding: 1rem;
  font-size: 24px;

  flex-shrink: 2;
  overflow-y: auto;
  border-radius: 1.125rem 1.125rem 1.125rem 0;
  background-color: #e91e63;
  color: #fff;
  border-bottom-left-radius: 0.125rem;
`;
