import React, { ChangeEventHandler } from "react";
import { SearchbarStyle, SearchbarButtonStyle } from "./searchbar-style";
interface SearchBarTypes {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
}

export const SearchBar: React.FC<SearchBarTypes> = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <div css={{ width: "49%", marginLeft: "10px" }}>
      <SearchbarStyle value={value} onChange={onChange} />
      <SearchbarButtonStyle onClick={onSubmit}>검색</SearchbarButtonStyle>
    </div>
  );
};
