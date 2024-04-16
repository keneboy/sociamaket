import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SavedContextProvider from "./contextApi/SavedContext";
import AuthContextProvider from "./contextApi/AuthProvider";
import RedirectContextProvider from "./contextApi/RedirectContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles/main.scss";
import ProductContextProvider from "./contextApi/ProductContext";
const query = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});
const clientId =
  "966506889524-ghlpinjm11n56b0uivmfva7bl079q6c3.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={query}>
          <ProductContextProvider>
            <SavedContextProvider>
              <RedirectContextProvider>
                <AuthContextProvider>
                  <GoogleOAuthProvider clientId={clientId}>
                    <App />
                    {/* <GoogleLogin onSuccess={handleSuccess} onError={handleError} /> */}
                  </GoogleOAuthProvider>
                </AuthContextProvider>
              </RedirectContextProvider>
            </SavedContextProvider>
          </ProductContextProvider>

          {/* only give in our development build */}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
