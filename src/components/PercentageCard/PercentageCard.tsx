import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  type: "InDiet" | "OutDiet";
  title?: string;
  subTitle?: string;
};

export const PercentageCard = ({ type, title, subTitle }: Props) => {
  const navigation = useNavigation();

  const handleGoStatisticDiet = () => {
    navigation.navigate("generalStatistics", { home: "exemplo" });
  };

  return (
    <S.Container onPress={handleGoStatisticDiet} type={type}>
      <S.Title>{title}</S.Title>
      <S.subTitle>{subTitle}</S.subTitle>
      <S.ContainerArrowIcon>
        <S.ArrowIcon name="arrow-forward" />
      </S.ContainerArrowIcon>
    </S.Container>
  );
};
