import * as S from "./styles";

type Props = {
  title?: string;
  subTitle?: string;
};

export const CardStatisticsFull = ({ subTitle, title }: Props) => {
  return (
    <S.CardBest>
      <S.NumberOfBest>{title}</S.NumberOfBest>
      <S.TitleOfBest>{subTitle}</S.TitleOfBest>
    </S.CardBest>
  );
};
