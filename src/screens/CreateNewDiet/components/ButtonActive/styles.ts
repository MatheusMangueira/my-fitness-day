import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";

type Props = {
  isActive?: boolean;
  color: "GREEN" | "RED";
};

const optionsButton = {
  isActive: (theme: DefaultTheme, color: "GREEN" | "RED") => css`
    background-color: ${color == "GREEN"
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};

    border: 1px solid
      ${color == "GREEN" ? theme.COLORS.GREEN_DRAK : theme.COLORS.RED_DARK};
  `,
};

export const Button = styled(TouchableOpacity)<Props>`
  ${({ theme, isActive, color }) => css`
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex: 1;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    flex-direction: row;
    ${isActive && optionsButton.isActive(theme, color)}
  `}
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
