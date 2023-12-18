import { useResource } from "./resource.hook";

export type BookType = {
  name: string;
  price: number;
  title: string;
  pages: number;
};
export const BookInfo = ({ bookId }: { bookId: string }) => {
  const book = useResource(`http://localhost:9090/books/${bookId}`);

  if (!book || !("price" in book)) return <h2>Loading...</h2>;
  const { name, price, title, pages } = book || {};

  return (
    <>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{title}</h2>
      <ul>{pages}</ul>
    </>
  );
};
