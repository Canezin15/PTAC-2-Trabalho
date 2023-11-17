    import { useParams } from "react-router-dom";
    import card from './Components/card';


    export default function Detalhe() {
        
        const { id } = useParams ();
        const lista = JSON.parse (localStorage.getItem("Lista"))
        
       const atividade = lista.filter((objeto) => {
            if(objeto.id == id){
                return objeto;
            }
            return null;
        })
        
        return (

                <card atividade={atividade[0] } />
        );
    }
 