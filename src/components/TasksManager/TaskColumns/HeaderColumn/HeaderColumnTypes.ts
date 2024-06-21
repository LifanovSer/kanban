export interface HeaderColumnProps {
  type: string;
  img: string;
  id: string;
  handleRemoveColumn: (id: string) => void;
  handleEditTitleColumn: (columnId: string, newValue: string) => void;
}
