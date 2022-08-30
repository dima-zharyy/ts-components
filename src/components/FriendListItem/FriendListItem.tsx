import css from "./FriendListItem.module.css";
import { IFriendsItem } from "types/appTypes";

export const FriendListItem: React.FC<
  Pick<IFriendsItem, "avatar" | "name" | "isOnline">
> = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={`${css.status} ${css.online}`}></span>
      ) : (
        <span className={`${css.status} ${css.ofline}`}></span>
      )}

      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
