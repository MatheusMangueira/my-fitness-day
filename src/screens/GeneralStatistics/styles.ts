import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

type typeContainerInOrOut = {
  type: "InDiet" | "OutDiet";
};

export const Container = styled(SafeAreaView)<typeContainerInOrOut>`
  background-color: ${({ theme, type }) =>
    type === "InDiet" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const subTitle = styled.Text`
  margin-bottom: 32px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const StatisticsContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const TitleStatistics = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const ContarinerInOrOutDiet = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
`;
