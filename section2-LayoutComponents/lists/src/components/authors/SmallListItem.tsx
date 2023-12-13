import { IAuthor } from "../data/author";

interface ISmallAuthorListItemProps {
  author: IAuthor;
}
export const SmallAuthorListItem = ({ author }: ISmallAuthorListItemProps) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
