import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
