export interface IMealProps {
  id: string;
  date?: string;
  name?: string;
  time?: string;
  isActive?: boolean;
  description?: string;
}

export interface IFormProps {
  mode: "create" | "edit";
  name: string;
  time: string;
  date: string;
  isActive: boolean;
  description: string;
}
