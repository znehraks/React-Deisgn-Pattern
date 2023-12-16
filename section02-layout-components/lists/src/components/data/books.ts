export interface IBook {
  name: string;
  pages: number;
  title: string;
  price: number;
}
export const books: IBook[] = [
  { name: "aBook", pages: 55, title: "tKorea", price: 12.99 },
  { name: "bBook", pages: 12, title: "tJapan", price: 2.99 },
  { name: "cBook", pages: 33, title: "tKorea", price: 8.99 },
];
