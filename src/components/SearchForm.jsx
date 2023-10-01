import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './SearchForm.module.css' ;

const BASE_URL = "51.20.78.156" ;

function SearchForm({setSearchResult}){

  const [selectedRegion , setSelectedRegion] = useState("") ; 
  const [selectedCpu , setSelectedCpu] = useState("") ; 
  const [selectedOS , setSelectedOS] = useState("") ;
  
  const [regions , setRegions] = useState([]) ; 
  const [cpu , setCpu] = useState([]) ; 
  const [OS , setOS] = useState([]) ; 
  const [search , setSearch] = useState(false) ;  // validate it   

  useEffect(function(){
    if(!search) return ; 

    async function fetchSearch(){
      const Searchdata = {
        selectedRegion,
        selectedCpu,
        selectedOS,
      };

      const res = await fetch(`${BASE_URL}/ec2-instance-explorer/search`, {
        method: "POST",
        body : JSON.stringify(Searchdata),
      }); 
      const data = await res.json() ; 
      setSearchResult(data) ; 
    }

    fetchSearch() ; 
  },[search, selectedCpu, selectedOS, selectedRegion, setSearchResult])


  useEffect(function(){
    if(regions.length !==0 || cpu.length !==0 || OS.length !==0) return ;
    async function fetchRegions(){
      const res = await fetch(`${BASE_URL}/ec2-instance-explorer/regions`) ; 
      const data = await res.json() ; 

      setRegions(data) ; 
    }
    async function fetchCpu(){
      const res = await fetch(`${BASE_URL}/ec2-instance-explorer/cpu`) ; 
      const data = await res.json() ; 

      setCpu(data) ; 
    }

    async function fetchOS(){
      const res = await fetch(`${BASE_URL}/ec2-instance-explorer/operating-systems`) ; 
      const data = await res.json() ; 

      setOS(data) ; 
    }

    fetchRegions (); 
    fetchCpu() ; 
    fetchOS() ; 
  },[OS, cpu, regions]);


  function handleSubmit(e){
    e.preventDefault(); 
    setSearch(true) ; 
  }

  return (
    <div className={styles.SearchForm}>
      <form onSubmit={handleSubmit}>
        <select
          name="region"
          id="region"
          defaultValue="default"
          data-testid="select region"
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
        <option hidden value="default">
            {" "}
            Select Region ?
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>

        <select
          name="cpu"
          id="cpu"
          defaultValue="default"
          data-testid="select Cpu"
          onChange={(e) => setSelectedCpu(e.target.value)}
        >
          <option hidden value="default">
            {" "}
            Select CPU core ?
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>

        <select
          name="os"
          id="os"
          defaultValue="default"
          data-testid="select Os"
          onChange={(e) => setSelectedOS(e.target.value)}
        >
          <option hidden value="default">
            {" "}
            Select OS ?
          </option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>

        <Button>SEARCH</Button>
      </form>
    </div>
  );
}
export default SearchForm ;