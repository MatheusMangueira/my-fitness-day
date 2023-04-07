import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ConteinerLogoAndUser = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const User = styled.Image`
  width: 46px;
  height: 46px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 32,
}))``;

export const ContainerHeaderifTitle = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
