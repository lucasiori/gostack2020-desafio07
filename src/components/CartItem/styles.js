import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 14px;
`;

export const Price = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #eee;
  width: 100%;
  height: 55px;
  border-radius: 5px;
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductAmount = styled.TextInput`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 65px;
  height: 40px;
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 0 10px;
`;

export const ProductTotal = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
