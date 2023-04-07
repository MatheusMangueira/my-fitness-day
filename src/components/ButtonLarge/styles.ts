import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const IconPLus = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))``;
