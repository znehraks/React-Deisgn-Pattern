import { IAuthor } from "./data/author";
import { IBook } from "./data/books";

export interface ISmallAuthorListItemProps {
  author: IAuthor;
}

export interface ILargeAuthorListItemProps {
  author: IAuthor;
}

export interface ISmallBookListItemProps {
  book: IBook;
}

export interface ILargeBookListItemProps {
  book: IBook;
}
