import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}