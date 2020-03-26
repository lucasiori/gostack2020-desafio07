import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: #fff;
  padding: 10px 15px;
  margin: 10px auto;
  border-radius: 5px;
`;

export const ItemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  max-height: 65%;
`;

export const OrderInfo = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const OrderPrice = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #000;
  font-size: 30px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #7159c1;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
