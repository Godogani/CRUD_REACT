import React, {
    useEffect,
    useState
} from 'react';
import fireDB from '../../config/firebase.js';
import {
    useHistory,
    useParams
} from 'react-router-dom';
import './styles.css';
import toast from 'react-toastify';

const AddEdit = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
    };

    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const [name, email, contact] = state;
    const history = useHistory();
    const {
        id
    } = useParams();

    useEffect(() => {
        fireDB.child("contacts").on("value", (snapshot) => {
            if (snapshot.value !== null) {
                setData({
                    ...snapshot.val(),
                })
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, [id]);

    useEffect(() => {
        if (id) {
            setState({
                ...data[id]
            });
        } else {
            setState({
                ...initialState
            });
        }
        return () => {
            setState({
                ...initialState
            });
        }
    }, [id, data]);


}