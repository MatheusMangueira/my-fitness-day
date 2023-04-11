import styled from "styled-components/native";

export const CardBest = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  width: 100%;
  padding: 20px 16px;
  margin-top: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NumberOfBest = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 8px;
  text-align: center;
`;

export const TitleOfBest = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
