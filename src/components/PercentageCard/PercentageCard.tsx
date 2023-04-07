import * as S from "./styles";

type Props = {
  type: "InDiet" | "OutDiet";
  title?: string;
  subTitle?: string;
};

export const PercentageCard = ({ type, title, subTitle }: Props) => {
  const handleGoStatisticDiet = () => {
    console.log("go to statistic diet");
  };

  return (
    <S.Container type={type}>
      <S.Title>{title}</S.Title>
      <S.subTitle>{subTitle}</S.subTitle>
      <S.ContainerArrowIcon onPress={handleGoStatisticDiet}>
        <S.ArrowIcon name="arrow-forward" />
      </S.ContainerArrowIcon>
    </S.Container>
  );
};
