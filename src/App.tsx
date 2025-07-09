import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import AppWrapper from "./components/app-wrapper/app-wrapper";
import ErrorFallback from "./components/error-fallback/error-fallback";
import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { store } from "./redux/store";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <AppWrapper />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
