import Navbar from './Components/Navbar/Navbar';
import BookList from './Components/BookList/BookList';
import ThemeContextProvider from './Contexts/ThemeContext';
import Navbar2 from './Components/Navbar/Navbar2';
import ThemeToggle from './Components/ThemeToogle/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        {/* 
          // Accessing context values by context.consumer
        <Navbar2 /> 
        */}
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
