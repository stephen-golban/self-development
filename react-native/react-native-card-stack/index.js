import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { StackProvider } from './components/Stack/Stack.context';

const Root = () => {
  return (
    <StackProvider>
      <App />
    </StackProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
