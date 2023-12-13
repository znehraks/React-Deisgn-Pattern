export type UserInfoProps = {
  user?: {
    name: string;
    age: number;
    country: string;
    books: string[];
  };
};
export const UsertInfo = ({ user }: UserInfoProps) => {
  if (!user) return <h2>Loading...</h2>;
  const { name, age, country, books } = user || {};
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>

      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};
