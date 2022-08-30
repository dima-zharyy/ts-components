import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";
import { Friends } from "types/appTypes";

export const FriendList: React.FC<Friends> = ({ friends }: Friends) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
