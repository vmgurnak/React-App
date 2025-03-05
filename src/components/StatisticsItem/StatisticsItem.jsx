import { IconContext } from 'react-icons';

import styled from './Statistics.module.css';

export const StatisticsItem = ({ stat, icon }) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: 'var(--color-accent)', size: '2em' }}
      >
        {icon}
      </IconContext.Provider>

      <span className={styled.counter}>{stat.total}</span>
      <p className={styled.text}>{stat.title}</p>
    </>
  );
};
