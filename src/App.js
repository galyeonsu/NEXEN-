import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import Content from './components/home/Content';
import GalleryList from './components/home/GalleryList';
import News from './components/News';
import Service from './components/Service';
import Tropy from './components/Tropy';
import Footer from './components/Footer';

function App() {
  return (   
    <div className="App">
      
      <NavBar/>
      <Modal />            
      <Content  />
      <GalleryList/> 
      {/* <News/> */}
      <Service/>
      <Tropy/>  
      <Footer/>
      </div>
  );
}

export default App;
