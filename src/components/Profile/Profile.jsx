import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileUser}>
        <img className={css.profileImg} src={image} alt={`Avatar ${name}`} />
        <p className={css.profileName}>{name}</p>
        <p className={css.ProfileTag}>@{tag}</p>
        <p className={css.ProfileLocation}>{location}</p>
      </div>
      <div>
        <ul className={css.ProfileList}>
          <li className={css.ProfileItem}>
            <span className={css.ProfileItemName}>Followers</span>
            <span className={css.ProfileItemValue}>{followers}</span>
          </li>
          <li className={css.ProfileItem}>
            <span className={css.ProfileItemName}>Views</span>
            <span className={css.ProfileItemValue}>{views}</span>
          </li>
          <li className={css.ProfileItem}>
            <span className={css.ProfileItemName}>Likes</span>
            <span className={css.ProfileItemValue}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
