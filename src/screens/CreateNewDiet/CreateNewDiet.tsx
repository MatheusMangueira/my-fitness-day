import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ButtonLarge } from "../../components/ButtonLarge/ButtonLarge";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { IFormProps, IMealProps } from "../../types";
import { ButtonActive } from "./components/ButtonActive/ButtonActive";
import * as S from "./styles";
import { formatDate } from "../../utils/formatDate";

type IData = {
  mode: "create" | "edit";
  data: IMealProps;
};

export const CreateNewDiet = () => {
  const navigate = useNavigation();
  const { params } = useRoute();
  const { data, mode } = params as IData;
  const [isActive, setIsActive] = useState(data.isActive);

  const { control, handleSubmit, setValue } = useForm<IFormProps>({
    defaultValues: {
      date: data.date || "",
      name: data.name || "",
      time: data.time || "",
      isActive: data.isActive || false,
      description: data.description || "",
    },
  });

  const handleGoBack = () => {
    navigate.navigate("home");
  };

  const handleActiveButton = (state: boolean) => {
    setIsActive(state);
    setValue("isActive", state);
  };

  const handleClickCreateOrEditDiet = (data: IFormProps) => {
    // TODO: create or edit diet
  };

  return (
    <S.Container>
      <Header
        title={mode === "edit" ? "Nova Refeição" : "Editar refeição"}
        onPress={handleGoBack}
      />

      <S.ContainerInput>
        <Controller
          rules={{ required: true }}
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              placeholder="Nome"
              title="Nome"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              textAlignVertical="top"
              numberOfLines={5}
              multiline={true}
              placeholder="Escreva sua descrição"
              title="Descrição"
            />
          )}
        />
        <S.ContainerDate>
          <Controller
            rules={{ required: true }}
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChangeText={onChange}
                  value={formatDate(value)}
                  flex={1}
                  placeholder="Data"
                  title="Data"
                />
              );
            }}
          />

          <Controller
            rules={{ required: true }}
            name="time"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChangeText={onChange}
                  value={value}
                  flex={1}
                  placeholder="Hora"
                  title="Hora"
                />
              );
            }}
          />
        </S.ContainerDate>

        <S.SubTitleYesAndNo>Está dentro da dieta?</S.SubTitleYesAndNo>
        <S.ContainerButtonActive>
          <Controller
            name="isActive"
            control={control}
            render={({ field: { value } }) => (
              <>
                <ButtonActive
                  onPress={() => handleActiveButton(true)}
                  title="SIm"
                  isActive={value}
                  color="GREEN"
                />
                <ButtonActive
                  onPress={() => handleActiveButton(false)}
                  title="Não"
                  isActive={!value}
                  color="RED"
                />
              </>
            )}
          />
        </S.ContainerButtonActive>

        <ButtonLarge
          onPress={handleSubmit(handleClickCreateOrEditDiet)}
          title={mode === "edit" ? "Cadastrar refeição" : "Nova refeição"}
        />
      </S.ContainerInput>
    </S.Container>
  );
};
