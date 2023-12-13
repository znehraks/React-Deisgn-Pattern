import { ILargeBookListItemProps } from "../interfaces";

export const LargeBookListItems = ({ book }: ILargeBookListItemProps) => {
  const { name, price, title, pages } = book;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>title: {title}</h2>
      <p>pages: {pages}</p>
    </>
  );
};
