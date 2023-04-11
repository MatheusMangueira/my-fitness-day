import * as S from "./styles";

type Props = {
  typeCard: "InDiet" | "OutDiet";
  subTitle: string;
  title: string;
};

export const CardInOrOut = ({ typeCard, subTitle, title }: Props) => {
  return (
    <S.Container typeCard={typeCard}>
      <S.Title>{title}</S.Title>
      <S.subTitle>{subTitle}</S.subTitle>
    </S.Container>
  );
};
