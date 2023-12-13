type BookInfoProps = {
  book?: {
    name: string;
    price: number;
    title: string;
    pages: number;
  };
};
export const BookInfo = ({ book }: BookInfoProps) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{title}</h2>
      <ul>{pages}</ul>
    </>
  ) : (
    <h2>Loading...</h2>
  );
};
