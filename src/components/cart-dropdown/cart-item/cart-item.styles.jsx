import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 85%;

  .img {
    float: left;
    margin-right: 8px;
    width: 50px;
    height: 50px;
  }

  .item-name {
    display: block;
    font-size: 16px;
  }

  .item-price {
    color: darkred;
  }

  .item-quantity {
    color: darkslategrey;
  }
`;
