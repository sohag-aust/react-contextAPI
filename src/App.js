import Navbar from './Components/Navbar/Navbar';
import BookList from './Components/BookList/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import Navbar2 from './Components/Navbar/Navbar2';
import ThemeToggle from './Components/ThemeToogle/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContext';
import BooksContextProvider from './Contexts/BooksContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          {/* 
            // Accessing context values by context.consumer
          <Navbar2 /> 
          */}

          <BooksContextProvider>
            <BookList />
          </BooksContextProvider>
          
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
