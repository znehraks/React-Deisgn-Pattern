import { includeUpdatableResource } from "./IncludeUpdatableResource";
import { UserType } from "./UserInfo";

type UserInfoFormProps = {
  user?: UserType;
  onChangeUser?: (updates: Partial<UserType>) => void;
  onPostUser?: () => void;
  onResetUser?: () => void;
};

export const UserInfoForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }: UserInfoFormProps) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:{" "}
          <input
            value={name}
            onChange={(e) => onChangeUser?.({ name: e.target.value })}
          />
        </label>

        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser?.({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/3",
  "user"
);
