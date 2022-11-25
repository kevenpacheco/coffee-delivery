import { Header } from "../../components/Header";
import successImg from "../../assets/success.png";
import {
  Container,
  DetailContainer,
  DetailsContainer,
  Subtitle,
  Title,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <>
      <Header />

      <Container>
        <div>
          <div>
            <Title>Uhu! Pedido confirmado</Title>
            <Subtitle>
              Agora é só aguardar que logo o café chegará até você
            </Subtitle>

            <DetailsContainer>
              <DetailContainer>
                <div>
                  <MapPin weight="fill" />
                </div>

                <div>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </div>
              </DetailContainer>

              <DetailContainer>
                <div>
                  <Timer weight="fill" />
                </div>

                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </DetailContainer>

              <DetailContainer>
                <div>
                  <CurrencyDollar weight="fill" />
                </div>

                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>Cartão de Crédito</strong>
                  </p>
                </div>
              </DetailContainer>
            </DetailsContainer>
          </div>

          <img
            src={successImg}
            alt="Entregar em uma motocileta, levando uma caixa com o pedido"
            height={293}
            width={492}
          />
        </div>
      </Container>
    </>
  );
}
