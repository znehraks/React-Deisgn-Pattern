import { LargeAuthorListItem } from "./components/authors/LargeListItem";
import { SmallAuthorListItem } from "./components/authors/SmallListItem";
import { LargeBookListItems } from "./components/books/LargeListItem";
import { SmallBookListItem } from "./components/books/SmallListItem";
import { authors } from "./components/data/author";
import { books } from "./components/data/books";
import { NumberedList } from "./components/lists/Numbered";
import { RegularList } from "./components/lists/Regular";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItems}
      />
    </>
  );
}

export default App;
