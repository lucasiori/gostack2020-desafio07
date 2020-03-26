import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  width: 240px;
  background-color: #fff;
  padding: 15px;
  margin: 0 10px;
  border-radius: 5px;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const Price = styled.Text`
  width: 100%;
  font-size: 21px;
  color: #000;
  font-weight: bold;
  text-align: left;
  margin: 10px 0;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #7159c1;
  border-radius: 5px;
  margin-top: auto;
`;

export const CartAmount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${darken(0.03, '#7159c1')};
  height: 100%;
  border-radius: 5px;
  width: 30%;
`;

export const CartAmountText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const AddButtonText = styled.Text`
  width: 70%;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
