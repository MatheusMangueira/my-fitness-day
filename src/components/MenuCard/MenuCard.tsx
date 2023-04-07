import * as S from "./styles";

type Props = {
  type?: S.TypeChecked;
  title?: string;
  time?: string;
  onPress?: () => void;
};

export const MenuCart = ({ onPress, time, title, type = "checked" }: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.TitleTime>{time}</S.TitleTime>
      <S.Title>{title}</S.Title>
      <S.Checked type={type} />
    </S.Container>
  );
};
