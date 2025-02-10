import css from './FriendListItem.module.css';

import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.FriendListItemWrapper}>
      <img
        className={css.FriendListItemImg}
        src={avatar}
        alt={`Avatar ${name}`}
        width="48"
      />
      <p className={css.FriendListItemName}>{name}</p>
      {/* <p className={css[isOnline]}>{isOnline ? 'Online' : 'Offline'}</p> */}
      <p
        className={clsx(css.FriendListItemStatus, {
          [css.statusOnline]: isOnline,
          [css.statusOffline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
