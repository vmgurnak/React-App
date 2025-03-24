import { Link } from 'react-router-dom';
import style from './GoBackBtn.module.css';

export const GoBackBtn = ({ backLinkRef }) => {
  return (
    <Link className={style.link} to={backLinkRef.current}>
      Go Back
    </Link>
  );
};
