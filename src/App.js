import Navbar from './Components/Navbar/Navbar';
import BookList from './Components/BookList/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
