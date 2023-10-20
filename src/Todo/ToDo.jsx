import { useEffect, useState } from "react";
import "./style.css";

export default function towatch() {//uso de componente//

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    //useState define um estado
    //      valor       estado
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState( listaLocalStorage || [] );
    const [id, setId] = useState(1);

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
                    
                        <p>{ativ.atividade}</p>
                        <button onClick={() => remover(ativ.id)}>REMOVE</button>
                    
                </div>
            )}
        </div>
    );
}