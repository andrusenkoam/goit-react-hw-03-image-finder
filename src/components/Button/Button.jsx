import { LoadMoreButton } from './Button.styled';

export const Button = ({ page, onBtnClick }) => {
  return (
    <LoadMoreButton type="button" onClick={() => onBtnClick((page += 1))}>
      Load more
    </LoadMoreButton>
  );
};
