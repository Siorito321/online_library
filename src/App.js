import Header from "./MainComponents/Header.js";
import Footer from "./MainComponents/Footer.js";
import GridBooks from "./BookComponents/GridBooks.js";
import BookPage from "./BookComponents/BookPage.js";
import About from "./MainComponents/About.js"
import Contact from "./MainComponents/Contact.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/books/:book_number" element={<BookPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<GridBooks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
