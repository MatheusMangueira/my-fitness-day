import * as S from "./styles";

type Props = {
  title?: string;
};

export const ButtonLarge = ({ title }: Props) => {
  return (
    <S.Container>
      <S.Button>
        <S.IconPLus name="add" />
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
};
