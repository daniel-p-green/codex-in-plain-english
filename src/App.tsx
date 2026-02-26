import { HashRouter } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import AppShell from './components/layout/AppShell';

function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </ProgressProvider>
  );
}

export default App;
