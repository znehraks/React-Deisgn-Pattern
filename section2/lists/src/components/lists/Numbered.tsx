import { IAuthor } from "../data/author";
import { IBook } from "../data/books";

interface IRegularListProps {
  items: IBook[] | IAuthor[];
  sourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent: (props: any) => React.JSX.Element;
}
export const NumberedList = ({
  items,
  sourceName,
  ItemComponent,
}: IRegularListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};
