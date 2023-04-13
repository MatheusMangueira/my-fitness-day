import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ContainerInput = styled.View`
  flex-grow: 1;
  /* flex: 1 0 75%; */
  gap: 16px;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerDate = styled.View`
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

export const SubTitleYesAndNo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const ContainerButton = styled.View`
  flex-direction: row;
`;

export const ContainerButtonActive = styled.View`
  gap: 16px;
  flex-grow: 1;
  flex-direction: row;
`;
