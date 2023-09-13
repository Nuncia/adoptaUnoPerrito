import './App.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import uno from './assets/img/uno.jpg';
import dos from './assets/img/dos.jpg';
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg';

function App() {
  return (
    <>
      <div style={{width: '1600px', textAlign:'center'}}>
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
          titulo = 'Benito y Estrella'
          texto = 'Somos Estrella y Benito de 9 años'
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
      </div>
      <Footer style={{textAlign: 'center'}} textoFooter = 'Explora nuestra galeria de adopción de perros, podrías encontrar a un gran compañero. Tenemos una variedad de perros con diferentes personalidades y tamaños... todos esperan encontrar un hogar junto a ti.'/>
    </>
  )
}

export default App
