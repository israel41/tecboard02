import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import {TemaEvento} from "../TemaEventoFormulario";
import { BotaoFormulario } from "../BotaoFormulario";
import "./formulario-de-eventos.estilos.css";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
     <div className="campos">
      <CampoDeFormulario>
        <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
        <CampoDeEntrada
          type="text"
          id="nomeEvento"
          placeholder="Summer dev hits"
          nome="nomeEvento"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">data do Evento</Label>
        <CampoDeEntrada
          type="date"
          id="dataEvento"
          nome="dataEvento"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="temaEvento">Tema do evento</Label>
        <TemaEvento id='temaEvento' name='temaEvento' />
      </CampoDeFormulario>
      <div className="acoes">
        <BotaoFormulario>
          Criar Evento
        </BotaoFormulario>
      </div>  
     </div>
    </form>
     
  );
}
