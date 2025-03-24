import { Container, CountryList, Section } from 'components';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRegion = searchParams.get('region');

  useEffect(() => {
    if (!searchRegion) return;
    async function fetchData() {
      const response = await fetchByRegion(searchRegion);
      setCountries(response);
    }
    fetchData();
  }, [searchRegion]);

  const onSetSearchParams = region => {
    if (region === searchRegion) return;
    setSearchParams({ region: region });
    setCountries(null);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSetSearchParams={onSetSearchParams} />
        {Array.isArray(countries) && countries.length > 0 && (
          <CountryList countries={countries} />
        )}
      </Container>
    </Section>
  );
};

export default SearchCountry;
