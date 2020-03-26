import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #141419;
  padding: 20px 30px;
`;

export const Badge = styled.Text`
  background-color: #7159c1;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  padding: 1px 0;
  color: #fff;
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: -8px;
  right: -5px;
`;
