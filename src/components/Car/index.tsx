import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rend,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/carDTO";
import { getAccessoriesIcon } from "../../utils/getAccessoriesIcon";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoriesIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rend>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rend>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
