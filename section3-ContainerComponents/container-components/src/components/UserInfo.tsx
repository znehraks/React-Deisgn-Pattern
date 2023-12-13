import { UserType } from "../@types";

export type UserInfoProps = {
  user?: UserType;
};
export const UserInfo = ({ user }: UserInfoProps) => {
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
