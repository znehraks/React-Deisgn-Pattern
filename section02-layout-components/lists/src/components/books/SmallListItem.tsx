import { ISmallBookListItemProps } from "../interfaces";

export const SmallBookListItem = ({ book }: ISmallBookListItemProps) => {
  const { name, price } = book;
  return (
    <h2>
      {name}/{price}
    </h2>
  );
};
