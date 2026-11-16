import Modal from "../modal/Modal";
import styled, { css } from "styled-components";

const RestaurantInfo=styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer=styled.div`
  display: flex;
`;

const ButtonField=css`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
`;

const ButtonItem=styled.button`
  ${ButtonField}

  &:last-child {
    margin-right: 0;
  }
`;
const PrimaryButton=styled.button`
  ${ButtonField}

  background: var(--primary-color);

  color: var(--grey-100);
`;

const SecondaryButton=styled.button`
  ${ButtonField}

  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
`;

function RestaurantDetailModal({ restaurant, onCloseModal }) {
  return (
    <Modal onClose={onCloseModal} title={restaurant.name}>
      <RestaurantInfo>
        <p className="restaurant-info__description text-body">{restaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <PrimaryButton className="text-caption"
          onClick={onCloseModal}
        >닫기</PrimaryButton>
      </ButtonContainer>
    </Modal>

  );
}

export default RestaurantDetailModal;
