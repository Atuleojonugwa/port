import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllSpace from './components/AllSpace';
import ExtensionManager from './components/ExtensionManager';
import { ROUTES } from './Lib/routes';
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.ALLSPACE} element={<AllSpace/>} />
        <Route path={ROUTES.EXTENSIONS} element={<ExtensionManager/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;