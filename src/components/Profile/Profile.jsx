import PropTypes from 'prop-types';

import css from './Profile.module.css';

const Profile = ({
  name, tag, location, image, stats
}) => (
  <div className={css.profileCard}>
    <div className={css.profileMain}>
      <img
        className={css.profileAvatar}
        src={image}
        alt="User avatar"
      />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileInfo}>{tag}</p>
      <p className={css.profileInfo}>{location}</p>
    </div>
    <ul className={css.profileStats}>
      {Object.keys(stats).map((key) => (
        <li className={css.profileStatsItem} key={key}>
          <span className={css.profileStatsName}>{key[0].toUpperCase() + key.slice(1)}</span>
          <span className={css.profileStatsValue}>{stats[key]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.objectOf({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;