import { LargeAuthorListItem } from "./components/authors/LargeListItem";
import { SmallAuthorListItem } from "./components/authors/SmallListItem";
import { authors } from "./components/data/author";
import { RegularList } from "./components/lists/Regular";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItem}
      />

      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
