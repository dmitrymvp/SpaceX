import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import MainPage from '../pages/MainPage';

function App() {
  return (
    <MantineProvider>
      <MainPage />
    </MantineProvider>
  );
}

export default App;
