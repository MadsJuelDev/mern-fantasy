import "./app-fantasy.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function AppFantasy() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Navbar />
        <div className="wrapper">
          <Main />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default AppFantasy;
