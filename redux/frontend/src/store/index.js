// Importando a funcao createStore que e usada para criar um Store do modulo 'redux'
import { createStore } from 'redux'

// Importando do diretorio reducers o arquivo index.js ontem possui todos os nossos reducers combinados gracas a funcao combineReducers.
import reducers from '../reducers'

// Aqui eu estou criando a minha Store que armazena todos os meus reducers.
const store = createStore(
    // O primeiro parametro e o retorno de combineReducers com todos os meus reducers.
    // Redux possui apenas uma Store.
    reducers,
    // O segundo eh uma configuracao da Extensao "Redux Dev Tools" que faz com que a gente consiga debugar os estados dos nossos reducers.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // Configuracao neecssaria para usar a Extensao "Redux Dev Tools" - window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // O objeto store nos retornar uma serie de funcoes/metodos.
)

// Exportar o Store.
export default store