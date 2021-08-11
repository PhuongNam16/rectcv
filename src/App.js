// import logo from './logo.svg';
import './App.css';
import Footer from './layout/footer/Footer';
import HeaderHome from './layout/header/Header';
import Main from './main/Main';
// import Banner from './components/banner/Banner';
// import Container from './components/container/Container';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Banner/>
      <Container/>
      <Footer/> */}
      <Header/>
      <HeaderHome/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
