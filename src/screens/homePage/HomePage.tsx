import * as S from "./styles";
import { ButtonLarge } from "../../components/ButtonLarge/ButtonLarge";
import { Header } from "../../components/Header/Header";
import { PercentageCard } from "../../components/PercentageCard/PercentageCard";
import { SectionList, View } from "react-native";
import { ListEmpty } from "../../components/ListEmpty/ListEmpty";
import { MenuCart } from "../../components/MenuCard/MenuCard";

export const HomePage = () => {
  const handleGoSnack = (id: string) => {
    console.log("go to snack", id);
  };

  return (
    <S.Container>
      <Header showLogo showBackButton={false} showTitleHeader={false} />
      <PercentageCard
        type="InDiet"
        title="90,86%"
        subTitle="das refeições dentro da dieta"
      />
      <S.Text>Refeições</S.Text>
      <ButtonLarge title="Nova Refeição" />

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={[
          {
            data: [
              "item1",
              "item2",
              "item3",
              "item4",
              "item5",
              "item6",
              "item7",
            ],
          },
        ]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MenuCart
            onPress={() => handleGoSnack(item)}
            time="12:00"
            title="X-tudo"
            type="checked"
          />
        )}
        renderSectionHeader={(item) => (
          <S.SectionTitle>12.08.22</S.SectionTitle>
        )}
      />
    </S.Container>
  );
};
