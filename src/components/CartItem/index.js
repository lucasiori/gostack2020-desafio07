import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  DeleteButton,
  Container,
  ProductImage,
  ProductInfo,
  Description,
  Price,
  Footer,
  Controls,
  ProductAmount,
  ProductTotal
} from './styles';

export default function CartItem() {
  return (
    <Wrapper>
      <DeleteButton>
        <Icon name="delete-forever" size={24} color="#7159c1" />
      </DeleteButton>

      <Container>
        <ProductImage
          source={{ uri: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg' }}
          alt="Item"
        />

        <ProductInfo>
          <Description>Tênis de Caminhada Leve Confortável</Description>
          <Price>R$ 179,90</Price>
        </ProductInfo>
      </Container>

      <Footer>
        <Controls>
          <TouchableOpacity>
            <Icon name="remove-circle-outline" size={24} color="#7159c1" />
          </TouchableOpacity>
          <ProductAmount editable={false} value="2"></ProductAmount>
          <TouchableOpacity>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
        </Controls>

        <ProductTotal>R$ 539,70</ProductTotal>
      </Footer>
    </Wrapper>
  );
}
