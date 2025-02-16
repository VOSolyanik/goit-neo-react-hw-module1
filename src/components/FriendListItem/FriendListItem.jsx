import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? css.online : css.offline;
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt={name} />
      <p>{name}</p>
      <p className={clsx(css.friendStatus, status)}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}