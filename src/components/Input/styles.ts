import { TextInput } from "react-native";
import styled from "styled-components/native";

type Props = {
  flex?: number;
}

export const Container = styled.View<Props>`
  flex: ${({ flex }) => flex ?  1 : 'none'};
  gap: 6px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Input = styled(TextInput)`
  background-color: transparent;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  min-height: 48px;
  border-radius: 6px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 14px;
`;
