import * as S from "./styles";
import { TouchableOpacityProps, View } from "react-native";
import logo from "../../assets/Logo.png";

type Props = TouchableOpacityProps & {
  showBackButton?: boolean;

  showLogo?: boolean;
  showTitleHeader?: boolean;
};

export const Header = ({
  showBackButton = true,
  showTitleHeader = true,
  showLogo = false,
}: Props) => {
  const handleGoBack = () => {
    console.log("go back");
  };

  return (
    <S.Container>
      {showLogo && (
        <S.ConteinerLogoAndUser>
          <S.Logo source={logo} />
          <S.User source={logo} />
        </S.ConteinerLogoAndUser>
      )}
      {showBackButton && (
        <S.ContainerHeaderifTitle>
          <S.BackButton onPress={handleGoBack}>
            <S.BackIcon name="arrow-back" />
          </S.BackButton>
          {showTitleHeader && <S.Title>Text</S.Title>}
        </S.ContainerHeaderifTitle>
      )}
    </S.Container>
  );
};
