/* eslint-disable @typescript-eslint/no-explicit-any */
const isObject = (data: any) => typeof data === "object" && data !== null;
export const RecursiveComponent = ({ data }: { data: any }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }
  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};
