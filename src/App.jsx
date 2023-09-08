import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import uno from './assets/img/uno.jpg';

function App() {
  return (
    <>
      <Header textoTitulo = 'Adopta un perrito'/>
      <Card
        // imagen = {uno}
        titulo = 'Alberto'
        texto = 'Soy Alberto tengo 3 años'
        colorBadge= 'success'
        textoBadge= 'Mestizo'
      />
    </>
  )
}

export default App
