import { Container, Logo } from "./styles";
import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png';

export function Header() {
  type Props = {
    showBackButton?: boolean;
  }

  export function Header({ showBackButton = false }: Props) {
    return (
      <Container>
        {
          showBackButton &&
          <BackButton>
            <BackIcon />
          </BackButton>
        }

        <Logo source={logoImg} />
      </Container>
    )