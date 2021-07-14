import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({aoEnviar, aoVoltar}){
  const [cep, setCep] = useState("");
  const [endereco, setEendereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return(
    <form onSubmit={(event =>{
      event.preventDefault();
      aoEnviar({cep, endereco, numero, estado, cidade})
    })}>
        <TextField 
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep" 
        name="cep"
        label="cep" 
        type="number" 
        variant="outlined" 
        margin="normal"
        required
      />

      <TextField 
        value={endereco}
        onChange={(event) => {
          setEendereco(event.target.value);
        }}
        id="endereco" 
        name="endereco"
        label="endereço" 
        type="text" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        required
      />

      <TextField 
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero" 
        name="numero"
        label="número" 
        type="number" 
        variant="outlined" 
        margin="normal"
        required
      />

      <TextField 
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado" 
        name="estado"
        label="estado" 
        type="text" 
        variant="outlined" 
        margin="normal"
        required
      />

      <TextField 
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade" 
        name="cidade"
        label="cidade" 
        type="text" 
        variant="outlined" 
        margin="normal"
        required
      />
      <br></br>
      <Button type="submit" variant="contained" color="primary" >
        Finalizar cadastro
      </Button> 
      <label> | </label>
      <Button onClick={aoVoltar} variant="contained" color="primary" >
        Voltar
      </Button> 
    </form>
  );
}

export default DadosEntrega;