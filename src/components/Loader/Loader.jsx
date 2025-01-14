import { Container, Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Spinner>
        <span></span>
      </Spinner>
    </Container>
  );
};
