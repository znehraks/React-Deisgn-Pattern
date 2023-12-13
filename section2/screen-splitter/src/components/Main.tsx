import { SmallAuthorListItem } from "./authors/SmallListItem";
import { authors } from "./data/author";
import { RegularList } from "./lists/Regular";

export const Main = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />
    </>
  );
};
