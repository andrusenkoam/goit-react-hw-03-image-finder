import { createPortal } from 'react-dom';
import { Container, Spinner } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal(
    <Container>
      <Spinner>
        <span></span>
      </Spinner>
    </Container>,
    loaderRoot
  );
};
