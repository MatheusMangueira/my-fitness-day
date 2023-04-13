import { TextInput, TextInputProps } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  title?: string;
  flex?: number;
};

export const Input = ({ flex, title = "Nome", inputRef, ...rest }: Props) => {
  const { COLORS } = useTheme();
  return (
    <S.Container flex={flex}>
      <S.Title>{title}</S.Title>
      <S.Input placeholderTextColor={COLORS.GRAY_300} {...rest} />
    </S.Container>
  );
};
