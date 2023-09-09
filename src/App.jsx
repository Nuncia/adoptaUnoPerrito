import './App.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import uno from './assets/img/uno.jpg';
import dos from './assets/img/dos.jpg';
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <>
      <div className='container'>
      <Header textoTitulo = 'Adopta un perrito'/>
      <div className='MyCards'>
        <MyCard
          imagen = {uno}
          titulo = 'Alberto'
          texto = 'Soy Alberto tengo 3 años'
          colorBadge = 'info'
          textoBadge = 'Mestizo'
        />
        <MyCard
          imagen = {dos}
          titulo = 'Rita'
          texto = 'Soy Rita tengo 1 años'
          colorBadge = 'success'
          textoBadge = 'Labrador'
        />
        <MyCard
          imagen = {tres}
          titulo = 'Benito'
          texto = 'Soy Benito tengo 9 años'
          colorBadge = 'warning'
          textoBadge = 'Mestizo'
        />
        <MyCard
          imagen = {cuatro}
          titulo = 'Zaeta'
          texto = 'Soy Zaeta tengo 5 años'
          colorBadge = 'danger'
          textoBadge = 'Boxer'
        />
      </div>
      <Paragraph
        texto= 'Explora nuestra galeria de adopción de perros, podrías encontrar a un gran compañero. Tenemos una variedad de perros con diferentes personalidades y tamaños... todos esperan encontrar un hogar junto a ti.'
      />
    </div>
    <div>
    
    </div>
    <Footer textoFooter = '© 2020 Copyright: Mónica Ayala Huerta'/>
    </>
  )
}

export default App
