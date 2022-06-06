import React, {
    useEffect,
    useState
} from 'react';
import {
    Link
} from 'react-router-dom';
import firebaseDB from '../../config/firebase.js';
import './styles.css';
import toast from 'react-toastify';

//Declaração do componente Home
const Home = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        firebaseDB.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({
                    ...snapshot.val(),
                });
            } else {
                setData({});
            }
        });

        return () => {
            setData({});
        };
    }, []);
    const onDelete = (id) => {
        if (window.confirm("Are you sure wanted to delete this record ?")) {
            firebaseDB.child(`contacts/${id}`).remove((err) => {
                if (err) {
                    console.log(err);
                } else {
                    toast.success("User Delete Successfully");
                }
            });
        }
    };
    return(
        <div className="table">
            <div className="table-row">
                <div className="table-col">ID</div>
                <div className="table-col">Nome</div>
                <div className="table-col">E-mail</div>
                <div className="table-col">Contato</div>
                <div className="table-col">Ação</div>
            </div>
           {Object.keys(data).map((id, index)=>{
               return(
                   <div key={id} className="table-row">
                       <div className="table-col">{data[id].nome}</div>
                       <div className="table-col">{data[id].email}</div>
                       <div className="table-col">{data[id].contato}</div>
                       <div className="table-col">{data[id].nome}</div>
                       <div className="table-col">
                           <Link to={`/update/${id}`}>
                               <button className="btn btn-edit">Editar</button>
                           </Link>
                           <button className="btn btn-delete" onClick={onDelete(id)}>Deletar</button>
                           <Link to={`/view/${id}`}>
                               <button className="btn btn-viwe">Visualizar</button>
                           </Link>
                       </div>
                   </div>
               )
           })}
        </div>
    )
}

export default Home;