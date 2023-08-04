import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/login";

function App() {
  //let [chars_id, setchars_id] = useState([]);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  //   const login = async (userData) => {
  //     try {
  //       const { email, password } = userData;
  //       const { data } = await axios(
  //         URL + `?email=${email}&password=${password}`
  //       );
  //       const { access } = data;
  //       setAccess(access);
  //       access && navigate("/home");
  //     } catch (error) {
  //       console.log(`Hubo un error en el login ${error.message}`);
  //     }
  //   };
  function login(userData) {
    const email = "jhguzmans@gmail.com";
    const password = "123asd";
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("El usuario o la contraseña son incorrectos");
    }
  }
  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const data = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("No hay personajes con ese ID");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
