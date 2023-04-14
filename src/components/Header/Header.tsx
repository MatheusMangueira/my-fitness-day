import { TouchableOpacityProps } from "react-native";
import userImg from "../../assets/Ellipse.png";
import logo from "../../assets/Logo.png";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  showBackButton?: boolean;

  showLogo?: boolean;
  showTitleHeader?: boolean;
  onPress?: () => void;
  title?: string;
};

export const Header = ({
  showBackButton = true,
  showTitleHeader = true,
  showLogo = false,
  title,
  onPress,
}: Props) => {
  const handleGoBack = () => {
    onPress && onPress();
  };

  return (
    <S.Container>
      {showLogo && (
        <S.ConteinerLogoAndUser>
          <S.Logo source={logo} />
          <S.User source={userImg} />
        </S.ConteinerLogoAndUser>
      )}
      {showBackButton && (
        <S.ContainerHeaderifTitle>
          <S.BackButton onPress={handleGoBack}>
            <S.BackIcon name="arrow-back" />
          </S.BackButton>
          {showTitleHeader && <S.Title>{title}</S.Title>}
        </S.ContainerHeaderifTitle>
      )}
    </S.Container>
  );
};
