import Navbar from './Components/Navbar/Navbar';
import BookList from './Components/BookList/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import Navbar2 from './Components/Navbar/Navbar2';
import ThemeToggle from './Components/ThemeToogle/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContext';
import BooksContextProvider from './Contexts/BooksContext';
import MovieContextProvider from './Contexts/MovieContext';
import Navbar3 from './Components/Navbar/Navbar3';
import MovieList from './Components/MovieList/MovieList';

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

          {/* for movie context and components */}
          <MovieContextProvider>
            <Navbar3 />
            <MovieList />
          </MovieContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
