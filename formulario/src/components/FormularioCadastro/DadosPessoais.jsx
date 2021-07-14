import React, {useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core"
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar, aoVoltar}){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
  <form onSubmit={(event) => {
    event.preventDefault();
    if(possoEnviar()){
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }
  }}>
      <TextField 
        value={nome}
        onChange={event => {
          setNome(event.target.value);  
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="Nome" 
        name="nome"
        label="Nome" 
        variant="outlined" 
        fullWidth margin="normal"
        required
      />

      <TextField 
        value={sobrenome}
        onChange={(event) =>{
          setSobrenome(event.target.value);
        }}
        id="Sobrenome" 
        name="sobrenome"
        label="Sobrenome" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        required
      />

      <TextField 
        value={cpf}
        onChange={(event) => {
          let tempCpf = event.target.value;
          if(tempCpf.length >= 12){
            tempCpf = tempCpf.substr(0, 10);
          }
          setCpf(tempCpf);

        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF" 
        name="cpf"
        type="number"
        label="CPF" 
        variant="outlined" 
        fullWidth
        margin="normal"
        required
      />

      <FormControlLabel 
        label="Promoções" 
        control={<Switch checked={promocoes} onChange={event => {
          setPromocoes(event.target.checked);
        }} name="Promoções"  />}
      />

      <FormControlLabel 
        label="Novidades" 
        control={<Switch checked={novidades} onChange={event => {
          setNovidades(event.target.checked);
        }} name="Novidades" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
      <label> | </label>
      <Button onClick={aoVoltar} variant="contained" color="primary">
        Voltar
      </Button> 
    </form>
  );
}

export default DadosPessoais;