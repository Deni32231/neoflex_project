import { Routes, Route } from 'react-router-dom'

import { AllClaims } from './pages/AllClaims'
import { EditClaim } from './pages/EditClaim'
import { AddClaim } from './pages/AddClaim'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AllClaims />} />
      <Route path=':id/edit_claim' element={<EditClaim />} />
      <Route path='add_claim' element={<AddClaim />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
}

export default App;