import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Container, CountryInfo, Section } from 'components';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!countryId) return;
    async function fetchData() {
      const response = await fetchCountry(countryId);
      setCountry(response);
    }
    fetchData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {country && <CountryInfo country={country} state={location.state} />}
      </Container>
    </Section>
  );
};

export default Country;
