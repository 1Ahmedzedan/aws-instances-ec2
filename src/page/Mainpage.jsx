import { useReducer, useState } from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import SearchResult from '../components/SearchResult';
import styles from './Mainpage.module.css' ; 
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import SearchForm from '../components/SearchForm.jsx' ;
import DarkMode from '../components/DarkMode';
import { useApp } from '../context/AppProvider';


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
  const {dark} = useApp() ; 
  const [state , dispatch] = useReducer(reducer , intialState) ; 
  const [searchResult , setSearchResult] = useState([]) ; 
  return (
    <div className={styles.Mainpage}>
      <div className={styles.headerControl}>
        <Header>
          <img src="img/awslogo.svg" alt="logo" style={dark ? {filter:"invert(100%)"} : {}}/>
          <SearchForm setSearchResult={setSearchResult}/>
          <Link to="/"><Button>Log out</Button></Link>
          <DarkMode/> 
        </Header>
        {searchResult.length === 0 && <div  className={styles.msg}> <p>😊 start by searching for an instance.</p> </div>}
        {searchResult.length !== 0 && <Filter  handleFilter={dispatch} filterValue={state}/> }
      </div>
      <SearchResult filterValue={state} searchResult={searchResult}/>
    </div>
  );
}
export default Mainpage ;