import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import LoginPagePage from "./pages/inicio-register/LoginPage"
import RegisterPage from "./pages/inicio-register/RegisterPage"
import Home from "./pages/landing/home"



function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={ <Home/> } />
          <Route path="/login" element ={ <LoginPagePage/> } />
          <Route path="/register" element ={ <RegisterPage/> } />
          <Route path="/tasks" element ={ <h1> Tasks page </h1> } />
          <Route path="/add-task" element ={ <h1> new task </h1> } />
          <Route path="/tasks/:id" element ={ <h1> update task </h1> } />
          <Route path="/profile" element ={ <h1> profile </h1> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App