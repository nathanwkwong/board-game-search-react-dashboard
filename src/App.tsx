import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/reactQueryConfig";

import AppDashboard from "layouts/AppDashboard";

import "./styles/common.scss";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppDashboard />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
