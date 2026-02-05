import './tema-formulario.estilos.css'

export function TemaEvento({tema}) {
    return(
        <select className ='temaEvento' defaultValue={tema}>
           <option value="casamento"  >Casamento</option>
           <option value="aniversario">Aniversário</option>
        </select>
    
    )
    
}