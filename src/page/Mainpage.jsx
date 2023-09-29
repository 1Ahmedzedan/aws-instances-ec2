import { useReducer } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import SearchResult from '../components/SearchResult';
import styles from './Mainpage.module.css' ; 

function reducer(state , action){
  switch(action.type){
    case "clickNetwork" :
      return{
        ...state,
        showNetwork: !state.showNetwork
      }
    case "clickMemory":
      return{
        ...state,
        showMemory: !state.showMemory
      }
    case "clickStorage":
      return{
        ...state,
        showStorage: !state.showStorage
      }
    case "clickCpu":
      return{
        ...state,
        showCpu: !state.showCpu
      }
    case "clickOS":
      return{
        ...state,
        showOS: !state.showOS
      }
    default:
      throw new Error("invalid action type");
  }
}

const intialState={
  showNetwork: true,
  showMemory: true,
  showStorage: true,
  showCpu:true,
  showOS:true
};



function Mainpage(){
  const [state , dispatch] = useReducer(reducer , intialState) ; 
  return (
    <div className={styles.Mainpage}>
      <div className={styles.headerControl}>
        <Header/>
        <Filter handleFilter={dispatch} filterValue={state}/>
      </div>
      <SearchResult filterValue={state}/>
    </div>
  );
}
export default Mainpage ;