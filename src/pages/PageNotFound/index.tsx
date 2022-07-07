import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import lottieJson from '../../assets/not-found.json';

import { AnimationWrapper, Container } from './styles';

export function PageNotFound() {
  return (
    <Container>
      <AnimationWrapper>
        <Lottie
          loop
          play
          animationData={lottieJson}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </AnimationWrapper>
      <section>
        <h1>Página não encontrada</h1>
        <p>
          A página que você está procurando não foi encontrada. Tente voltar à
          página anterior ou para a página inicial.
        </p>
        <Link to="/">Página inicial</Link>
      </section>
    </Container>
  );
}
