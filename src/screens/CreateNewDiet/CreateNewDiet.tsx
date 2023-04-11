import { useRoute } from "@react-navigation/native";
import { IMealProps } from "../../types";
import * as S from "./styles";

type IData = {
  data: IMealProps;
};

export const CreateNewDiet = () => {
  const { params } = useRoute();
  const data = params as IData;
  console.log(data.data.id, "dataaa");

  return (
    <S.Container>
      <S.Title>{data.data.name}</S.Title>
    </S.Container>
  );
};
