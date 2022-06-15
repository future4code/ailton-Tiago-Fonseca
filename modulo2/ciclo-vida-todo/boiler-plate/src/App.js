import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const Tudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-left: 450px;
  margin-top: 50px;
  width: 300px;
  background-color: grey;
  border-radius: 80px 30px;
  color: white;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
 `

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  font-weight: bold;

`

class App extends React.Component {
    state = {
      tarefas: [
        {
        id: Date.now(),
        texto: 'Levar cão ao pet shop ',
        completa: false},
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Comprar um aquecedor',
          completa: true} // Indica se a tarefa está completa (true ou false)
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputValue === this.state.inputValue) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
    }
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas")
    if(tarefas) {
      const afazeresTarefas = localStorage.getItem("tarefas")
      const dadosConvertidos = JSON.parse(afazeresTarefas)
      this.setState({inputValue: dadosConvertidos[0]?.texto })
      this.setState({filtro: dadosConvertidos[0]?.completa})
      }
    
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    console.log("ADICONAR TAREFA", this.state.inputValue)
const novaTarefa = {
  id: Date.now(), 
	texto: this.state.inputValue,
	completa: false
}

const copiaDoEstado = [...this.state.tarefas]

copiaDoEstado.push(novaTarefa)

this.setState({tarefas: copiaDoEstado})

  }

  selectTarefa = (id) => {
    console.log("ALTERAR Terefa", id)
    const novaListaDeTarefas = this.state.listaDeTarefas.map((idd) => {
      if (id === idd.id) {
        const novoId = {
          ...idd,
          completa: !idd.completa
        }
        return idd
      }
    })

  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value})
  }

   render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Tudo className="App">
        <h1>* Lista de Tarefas *</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </Tudo>
    )
  }
}

export default App
