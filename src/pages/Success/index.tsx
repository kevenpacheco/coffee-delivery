import successImg from "../../assets/success.png";
import {
  Container,
  DetailContainer,
  DetailsContainer,
  Subtitle,
  Title,
} from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderDetailsContext } from "../../contexts/OrderDetailsContext";
import { useContext } from "react";

const PAYMENT_MAPPER = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  MONEY: "Dinheiro",
};

export function Success() {
  const { address, paymentType } = useContext(OrderDetailsContext);
  const { street, number, city, district, uf } = address;

  return (
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
                  Entrega em <strong>{`${street}, ${number}`}</strong>
                </p>
                <p>{`${district} - ${city}, ${uf}`}</p>
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

            {paymentType ? (
              <DetailContainer>
                <div>
                  <CurrencyDollar weight="fill" />
                </div>

                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>{PAYMENT_MAPPER[paymentType]}</strong>
                  </p>
                </div>
              </DetailContainer>
            ) : null}
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
  );
}
