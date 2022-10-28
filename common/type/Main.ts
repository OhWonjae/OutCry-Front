interface itemType {
  label: string;
  value: string;
}
export const sortTypes: { [keys: string]: itemType } = {
  "": { label: "선택하세요", value: "" },
  bidderAsc: { label: "응찰가 낮은순", value: "bidderAsc" },
  bidderDesc: { label: "응찰가 높은순", value: "bidderDesc" },
  bidAsc: { label: "응찰 낮은순", value: "bidAsc" },
  bidDesc: { label: "응찰 낮은순", value: "bidDesc" },
};
export const sortList: Array<itemType> = Object.keys(sortTypes).map(
  (sortType) => sortTypes[sortType]
);
