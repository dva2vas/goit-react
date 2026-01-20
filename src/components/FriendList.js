import css from "./css/Friendlist.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) =>
(
  <ul className={css["friend-list"]}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);