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
       }else if( location.pathname === "/addpost"){
           setActiveTab("AddPost")
       }
   }, [location]); 

   return (
<>
</>
   )
};

export default Header;