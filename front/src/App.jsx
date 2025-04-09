import AlertProvider from "./context/AlertContext"
import CartProvider from "./context/Cartcontext"
import DataProvider from "./context/DataContext"
import LoginProvider from "./context/LoginContext"
import WrapRoutes from "./routes/Routes"

function App() {

  return (
    <>
      <AlertProvider>
        <LoginProvider>
          <CartProvider>
            <DataProvider>
              <WrapRoutes />
            </DataProvider>
          </CartProvider>
        </LoginProvider>
      </AlertProvider>
    </>
  )
}

export default App