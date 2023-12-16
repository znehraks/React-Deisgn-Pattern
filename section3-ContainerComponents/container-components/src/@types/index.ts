export type UserType = {
  id?: string | number;
  name: string;
  age: number;
  country: string;
  books: string[];
};

export type BookType = {
  id?: string | number;
  name: string;
  pages: number;
  title: string;
  price: number;
};
