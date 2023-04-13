import { Header } from "../../components/Header/Header";
import { CardInOrOut } from "./components/CardInOrOut/CardInOrOut";
import { CardStatisticsFull } from "./components/CardStatisticsFull/CardStatisticsFull";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type cardInOrOut = {
  typeCard: "InDiet" | "OutDiet";
  subtitle: string;
  title: string;
}[];

const card = [
  { title: "22", subtitle: "Melhor sequência de pratos dentro da dieta" },
  { title: "109", subtitle: "refeições registradas" },
];

const cardInOrOut: cardInOrOut = [
  { title: "22", subtitle: "refeições dentro da dieta", typeCard: "InDiet" },
  { title: "109", subtitle: "refeições fora da dieta", typeCard: "OutDiet" },
];

export const GeneralStatistics = () => {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("home");
  };

  return (
    <S.Container type="OutDiet">
      <Header onPress={handleNavigateToHome} />
      <S.Title> 90,86% </S.Title>
      <S.subTitle>Das reifeições dentro da dieta</S.subTitle>

      <S.StatisticsContainer>
        <S.TitleStatistics>Estatísticas gerais</S.TitleStatistics>

        {card.map((item) => (
          <CardStatisticsFull
            key={item.title}
            subTitle={item.subtitle}
            title={item.title}
          />
        ))}

        <S.ContarinerInOrOutDiet>
          {cardInOrOut.map((item) => (
            <CardInOrOut
              key={item.title}
              typeCard={item.typeCard}
              subTitle={item.subtitle}
              title={item.title}
            />
          ))}
        </S.ContarinerInOrOutDiet>
      </S.StatisticsContainer>
    </S.Container>
  );
};
