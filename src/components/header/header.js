import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './styles.css';

//Declaração do componente Header
const Header = () =>{
   
//Declarando as constantes para gestão de rotas na página
   const [activeTab, setActiveTab] = useState("Home");
   const location = useLocation();

//Função da biblioteca do React onde setamos a aba ativa de acordo com o a url
   useEffect(()=>{

       if( location.pathname === "/" ){
           setActiveTab("Home");
       }else if( location.pathname === "/add"){
           setActiveTab("add")
       }
   }, [location]); 

   return (

       //Aqui é declarada a navbar, usamos a tag header por princípios semânticos
       <header className="navbar">
           <p className="navbar-logo">CRUD</p>
           <nav classname="navbar-links">

               {/*Aqui declaramos que caso a aba ativa seja a Home
                  ou caso seja clicada, ela recebe a classe ative, 
                  caso contrário ela vai permanecer sem uma classe
                  CSS de customização para item ativo*/}

                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" :""}`}
                       onClick={()=>setActiveTab("Home")}
                    >
                        Home
                    </p>
                </Link>

                {/*Mesma ideia anterior porém aqui estamos usando
                   o caminho "/add" como nossa referência*/}

                <Link to="/add">
                    <p className={`${activeTab === "add" ? "active" : ""}`}
                       onclick={()=>setActiveTab("add")}
                    >
                        Adicionar Post
                    </p>
                </Link>
           </nav>
       </header>
   )
};

export default Header;