import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";
import { ButtonLarge } from "../../components/ButtonLarge/ButtonLarge";
import { Header } from "../../components/Header/Header";
import { MenuCart } from "../../components/MenuCard/MenuCard";
import { PercentageCard } from "../../components/PercentageCard/PercentageCard";
import { IMealProps } from "../../types";
import * as S from "./styles";

const data = [
  {
    title: "13/09/2021",
    data: [
      {
        id: "1",
        name: "X-tudo",
        time: "12:00",
        isActive: true,
      },
      {
        id: "2",
        name: "Mac",
        time: "1:00",
        isActive: false,
      },
    ],
  },
  {
    title: "15/09/2021",
    data: [
      {
        id: "1",
        name: "BOB'S",
        time: "12:00",
        isActive: true,
      },
      {
        id: "2",
        name: "hamburguer",
        time: "1:00",
        isActive: false,
      },
    ],
  },
] as {
  title: string;
  data: IMealProps[];
}[];

export const HomePage = () => {
  const navigation = useNavigation();

  const handleGoSnack = (data: IMealProps) => {
    navigation.navigate("createNewDiet", { mode: "edit", data: data });
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
        sections={data || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuCart
            onPress={() => handleGoSnack(item)}
            time={item.time}
            title={item.name}
            type={item.isActive ? "checked" : "unchecked"}
          />
        )}
        renderSectionHeader={(item) => (
          <S.SectionTitle>{item.section.title}</S.SectionTitle>
        )}
      />
    </S.Container>
  );
};
