import { meal } from "../types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      generalStatistics: {
        home: string;
      };
      createNewDiet: {
        mode: "create" | "edit";
        data?: meal;
      };
    }
  }
}
