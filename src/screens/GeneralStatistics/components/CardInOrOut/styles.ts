import styled from "styled-components/native";

type TypeProps = {
  typeCard: "InDiet" | "OutDiet";
};

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, typeCard }) =>
    typeCard === "InDiet" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 8px;
  flex: 1;
  padding: 20px 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
`;

export const subTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;
