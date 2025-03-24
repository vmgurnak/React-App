import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getCountries();

      console.log(response);
      setCountries(response);
    }

    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {Array.isArray(countries) && countries.length > 0 && (
          <CountryList countries={countries} />
        )}
      </Container>
    </Section>
  );
};

export default Home;
