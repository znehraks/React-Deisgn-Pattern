import { BookType } from "./BookInfo";
import { includeUpdatableResource } from "./IncludeUpdatableResource";

type BookInfoFormProps = {
  book?: BookType;
  onChangeBook?: (updates: Partial<BookType>) => void;
  onPostBook?: () => void;
  onResetBook?: () => void;
};

export const BookInfoForm = includeUpdatableResource(
  ({ book, onChangeBook, onPostBook, onResetBook }: BookInfoFormProps) => {
    const { name, price, title, pages } = book || {};

    return book ? (
      <>
        <label>
          Name:{" "}
          <input
            value={name}
            onChange={(e) => onChangeBook?.({ name: e.target.value })}
          />
        </label>

        <label>
          price:{" "}
          <input
            type="number"
            value={price}
            onChange={(e) => onChangeBook?.({ price: Number(e.target.value) })}
          />
        </label>

        <label>
          title:{" "}
          <input
            value={title}
            onChange={(e) => onChangeBook?.({ title: e.target.value })}
          />
        </label>

        <label>
          pages:{" "}
          <input
            type="number"
            value={pages}
            onChange={(e) => onChangeBook?.({ pages: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetBook}>Reset</button>
        <button onClick={onPostBook}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/books/1",
  "book"
);
