import { Container, Top, Left, Right } from './styles'
import Image from 'next/image'
import {
  FaGithub,
  FaEdit,
  FaEnvelope,
  FaFacebook,
  FaCoffee,
  FaPray,
  FaUsers,
} from 'react-icons/fa'
export default function Footer() {
  return (
    <Container>
      <Top>
        <h3>Tesouro dos Fiéis</h3>
        <Image src="/favicon.svg" width="50px" height="50px" alt="Logo" />
      </Top>
      <Left>
        <ul>
          <li>
            <a
              title="Melhore a App"
              href="https://www.github.com/ofrades/tesourofieis"
            >
              <FaEdit /> Colabore através do <FaGithub />
            </a>
          </li>

          <li>
            <a title="Fale connosco" href="mailto:info@tesourofieis.com">
              <FaEnvelope /> Escreva-nos para info@tesourofieis.com
            </a>
          </li>

          <li>
            <a
              title="Facebook"
              target="gitter"
              href="https://facebook.com/tesourofieis"
            >
              <FaUsers /> Siga-nos no <FaFacebook />
            </a>
          </li>

          <li>
            <a
              title="Quer pagar o café?"
              target="buymeacoffee"
              href="https://www.buymeacoffee.com/SP41OgGsM"
            >
              <FaCoffee /> Contribua pagando o café ou <FaPray /> uma Ave Maria
            </a>
          </li>
        </ul>
      </Left>

      <Right>
        <blockquote>
          <p>Em Portugal se conservará sempre o dogma da Fé</p>
        </blockquote>
        <h5>Nossa Senhora de Fátima</h5>
      </Right>
    </Container>
  )
}
