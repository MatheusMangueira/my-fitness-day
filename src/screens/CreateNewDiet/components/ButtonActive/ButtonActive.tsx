import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = {
  isActive?: boolean;
  color: "GREEN" | "RED";
  title?: string;
} & TouchableOpacityProps;

export const ButtonActive = ({ isActive, title, color, ...rest }: Props) => {
  return (
    <S.Button {...rest} color={color} isActive={isActive}>
      <S.Title> {title} </S.Title>
    </S.Button>
  );
};
