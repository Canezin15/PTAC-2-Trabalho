import { useEffect, useState } from "react";
import  {Link} from "react-router-dom"
import "./style.css";

export default function toWatch() {//uso de componente//

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    //useState define um estado
    //      valor       estado
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState( listaLocalStorage || [] );

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <h1>Lista de Carros</h1>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>ADICIONAR</button>
            </form >
            {lista.map((ativ) =>
                <div key={ativ.id}> 

                    <Link to={'/detalhe/${ativ.id}'}>
                        <p>{ativ.atividade}</p>
                    </Link>
                    
                        <button onClick={() => remover(ativ.id)}>REMOVE</button>
                    
                </div>
            )}
        </div>
    );
}