import {
  ILargeAuthorListItemProps,
  ISmallAuthorListItemProps,
} from "../interfaces";

interface IRegularListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  sourceName: string;
  ItemComponent: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: (ISmallAuthorListItemProps | ILargeAuthorListItemProps) | any
  ) => React.JSX.Element;
}
export const RegularList = ({
  items,
  sourceName,
  ItemComponent,
}: IRegularListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};
