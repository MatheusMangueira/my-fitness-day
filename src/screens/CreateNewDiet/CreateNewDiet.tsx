import { useNavigation, useRoute } from "@react-navigation/native";
import { IMealProps } from "../../types";
import * as S from "./styles";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { View } from "react-native";
import { ButtonActive } from "./components/ButtonActive/ButtonActive";
import { ButtonLarge } from "../../components/ButtonLarge/ButtonLarge";
import { useState } from "react";

type IData = {
  mode: "create" | "edit";
  data: IMealProps;
};

export const CreateNewDiet = () => {
  const { params } = useRoute();
  const { data, mode } = params as IData;
  const [isActive, setIsActive] = useState(data.isActive);
  const [NoActive, setNoActive] = useState(!data.isActive);

  const navigate = useNavigation();

  const handleGoBack = () => {
    navigate.navigate("home");
  };

  const handleActiveButton = () => {
    setIsActive(!isActive);
    setNoActive(false);
  };

  const handleNoActiveButton = () => {
    setNoActive(!NoActive);
    setIsActive(false);
  };

  return (
    <S.Container>
      <Header
        title={mode === "edit" ? "Nova Refeição" : "Editar refeição"}
        onPress={handleGoBack}
      />

      <S.ContainerInput>
        <Input placeholder="Nome" title="Nome" />
        <Input
          textAlignVertical="top"
          numberOfLines={5}
          multiline={true}
          placeholder="Escreva sua descrição"
          title="Descrição"
        />
        <S.ContainerDate>
          <Input flex={1} placeholder="Data" title="Data" />
          <Input flex={1} placeholder="Hora" title="Hora" />
        </S.ContainerDate>

        <S.SubTitleYesAndNo>Está dentro da dieta?</S.SubTitleYesAndNo>
        <S.ContainerButtonActive>
          <ButtonActive
            onPress={handleActiveButton}
            title="SIm"
            isActive={isActive}
            color="GREEN"
          />
          <ButtonActive
            onPress={handleNoActiveButton}
            title="Não"
            isActive={NoActive}
            color="RED"
          />
        </S.ContainerButtonActive>

        <ButtonLarge
          title={mode === "edit" ? "Cadastrar refeição" : "Nova refeição"}
        />
      </S.ContainerInput>
    </S.Container>
  );
};
