import * as S from "./styles";

type Props = {
  title?: string;
  onPress?: () => void;
};

export const ButtonLarge = ({ title, onPress }: Props) => {
  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <S.Container>
      <S.Button onPress={handlePress}>
        <S.IconPLus name="add" />
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
};
