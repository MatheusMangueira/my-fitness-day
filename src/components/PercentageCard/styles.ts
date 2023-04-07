import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type TypeCard = "InDiet" | "OutDiet";

type TypeProps = {
  type?: TypeCard;
};

export const Container = styled.View<TypeProps>`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  height: 102px;
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === "InDiet" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  padding: 20px 16px;
  margin-top: 24px;
  margin-bottom: 34px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const subTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const ContainerArrowIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
  transform: rotate(-45deg);
`;

export const ArrowIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DRAK,
  size: 24,
}))``;
