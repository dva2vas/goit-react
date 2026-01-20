import css from "./css/Friendlist.module.css";

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${
          isOnline ? css.online : css.offline
        }`}
      > </span>

      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />

      <p className={css.name}>{name}</p>
    </li>
  );
};  

