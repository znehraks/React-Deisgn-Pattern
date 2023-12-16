import { Modal } from "./components/Modal";
import { LargeBookListItems } from "./components/books/LargeListItem";
import { books } from "./components/data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItems book={books[0]} />
      </Modal>
      {/* <RegularList
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
      /> */}
    </>
  );
}

export default App;
