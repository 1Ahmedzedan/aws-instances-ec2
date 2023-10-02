import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './SearchForm.module.css' ;
import { useApp } from '../context/AppProvider';


function SearchForm({setSearchResult}){
  const {BASE_URL} = useApp() ; 
  const [regionName , setRegionName] = useState("") ;
  const [cpu , setCpu] = useState(0) ;
  const [osName , setOsName] = useState("") ;
  
  const [regions , setRegions] = useState([]) ; 
  const [cpuSelection , setCpuSelection] = useState([]) ; 
  const [OS , setOS] = useState([]) ; 
  const [search , setSearch] = useState(false) ;  // validate it   

  useEffect(function(){
    if(!search) return ; 

    async function fetchSearch(){
      const res = await fetch(`${BASE_URL}/search?cpu=${cpu}&osName=${osName}&regionName=${regionName}`,{
        method: "POST"
      }); 

      const data = await res.json() ;
      console.log(data) ; 
      setSearchResult(data) ;  
    }
    fetchSearch() ; 
  },[search, cpu, osName, regionName, setSearchResult, BASE_URL])



  // fetch data to search
  useEffect(function(){
    if(regions.length !==0 || cpuSelection.length !==0 || OS.length !==0) return ;

    async function fetchRegions(){
      const res = await fetch(`${BASE_URL}/regions`) ; 
      const data = await res.json() ; 
      setRegions(data) ;  
    }
    async function fetchCpu(){
      const res = await fetch(`${BASE_URL}/cpu`) ; 
      const data = await res.json() ; 
      setCpuSelection(data) ; 
    }

    async function fetchOS(){
      const res = await fetch(`${BASE_URL}/operating-systems`) ; 
      const data = await res.json() ; 
      setOS(data) ; 
    }

    fetchRegions (); 
    fetchCpu() ; 
    fetchOS() ; 
  },[BASE_URL, OS, cpuSelection, regions]);


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
          onChange={(e) => setRegionName(e.target.value)}
        >

          <option hidden value="default">
            Select Region ?
          </option>
          {regions.map((region )=><option key={region.regionId} >{region.regionLongName}</option>)}
        </select>

        <select
          name="cpu"
          id="cpu"
          defaultValue="default"
          data-testid="select Cpu"
          onChange={(e) => setCpu(e.target.value)}
        >
          <option hidden value="default">
            Select CPU core ?
          </option>
          {cpuSelection.map((core)=><option key={core.vcpuCoreId}>{core.coreCount}</option>)}
        </select>

        <select
          name="os"
          id="os"
          defaultValue="default"
          data-testid="select Os"
          onChange={(e) => setOsName(e.target.value)}
        >

          <option hidden value="default">
            Select OS ?
          </option>
          {OS.map((os)=> <option key={os.operatingSystemId}>{os.operatingSystemName}</option>)}

        </select>

        <Button>SEARCH</Button>
      </form>
    </div>
  );
}
export default SearchForm ;