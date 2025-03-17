import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Section, Container } from 'components';
import { Photos } from 'tabs/Photos';
import { Todos } from 'tabs/Todos';

export const App = () => {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Todos</Tab>
            <Tab>Photos</Tab>
            <Tab>Contacts</Tab>
          </TabList>

          <TabPanel>
            <Todos />
          </TabPanel>
          <TabPanel>
            <Photos />
          </TabPanel>
          <TabPanel>Contacts</TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
};
