import { AttachmentType } from "./Attachment";
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
export interface SearchOptions {
  sort: string;
  search: string;
  page: number;
}
export interface ProductListTypes {
  totalPage: number;
  total: number;
  data: Array<ProductTypes>;
}
export interface ProductTypes {
  id: string;
  name: string;
  hopePrice: number;
  currentPrice: number;
  startingPrice: number;
  remainTime: string;
  isFavorite: boolean;
  thumbnail: AttachmentType | null | undefined;
}
