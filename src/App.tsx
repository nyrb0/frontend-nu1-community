import AppRouter from "./shared/routes/AppRouter";
import Cookies from "js-cookie";

function App() {
  console.log(Cookies.get("refreshToken"), "token");
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
