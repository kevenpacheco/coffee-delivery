import { createContext, ReactNode, useState } from "react";
import { PaymentType } from "../@types/Payment";
import { cepMask, UFMask } from "../utils/inputMasks";

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

export interface OrderDetailsContextType {
  address: AddressType;
  paymentType: PaymentType | null;
  changeAddressByKey: (key: string, value: string) => void;
  selectPayment: (payment: PaymentType) => void;
}

export const OrderDetailsContext = createContext({} as OrderDetailsContextType);

interface OrderDetailsContextProviderPropsType {
  children: ReactNode;
}

export function OrderDetailsContextProvider({
  children,
}: OrderDetailsContextProviderPropsType) {
  const [paymentType, setPaymentType] = useState<PaymentType | null>(null);
  const [address, setAddressa] = useState<AddressType>({
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  function changeAddressByKey(key: string, value: string) {
    setAddressa((prevState) => {
      let newValue = value;

      if (key === "cep") {
        newValue = cepMask.applyMask(value);
      }

      if (key === "uf") {
        newValue = UFMask.applyMask(value);
      }

      return {
        ...prevState,
        [key]: newValue,
      };
    });
  }

  function selectPayment(payment: PaymentType) {
    setPaymentType(payment);
  }

  return (
    <OrderDetailsContext.Provider
      value={{ address, paymentType, changeAddressByKey, selectPayment }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
}
