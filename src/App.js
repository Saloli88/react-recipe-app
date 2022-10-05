import './App.css';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Search_bar from './components/Search_bar';
function App() {
  return (
    <>
    <BrowserRouter>
        <Nav></Nav>
            <Search_bar></Search_bar>

    <Pages></Pages>
    </BrowserRouter>
    </>
  );
}

export default App;
