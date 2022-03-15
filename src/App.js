import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Article } from './composant/Article';
import { Form } from './composant/Form';

function App() {
 
  return (
    <div className='container'>
      <Form />
      <Article /> 
    </div>
  );
}

export default App;
