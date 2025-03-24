import styles from './SearchForm.module.css';
import { FiSearch } from 'react-icons/fi';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSetSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { region } = e.target.elements;
    if (region.value === 'default') {
      alert('Please select a region');
      return;
    }
    onSetSearchParams(region.value);
    // region.value = 'default';
    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option value="default">Select a region</option>
        {regions.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
