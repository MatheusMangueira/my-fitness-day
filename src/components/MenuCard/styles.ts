import styled from "styled-components/native";

export type TypeChecked = "checked" | "unchecked";

type CheckedProps = {
  type?: TypeChecked;
};

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 8px;
`;

export const TitleTime = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding-right: 8px;
`;

export const Title = styled.Text`
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Checked = styled.View<CheckedProps>`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  background-color: ${({ theme, type }) =>
    type === "checked" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
