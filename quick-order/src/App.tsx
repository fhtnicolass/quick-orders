import Home from "./pages/Menu";
import { CartProvider } from "./providers/CartContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
}

export default App;
