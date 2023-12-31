import styles from './SearchResult.module.css' ;
import Trow from './Trow.jsx';
import Button from './Button.jsx'
import { useState } from 'react';

function SearchResult({filterValue , searchResult}){
  const muberOfSlides = Math.ceil(searchResult.length/6) ; 
  const [slide , setSlide] = useState(0) ; 

  function handleSlideBack(){
    setSlide((e)=>e-1) ; 
  }

  function handleSlideNext(){
    setSlide((e)=>e+1) ; 
  }

  const{showStorage , showMemory , showCpu , showNetwork , showOS} = filterValue ; 
  return (
    <div className="searchResult">
      {searchResult.length !== 0 && <table data-testid="select table" class={styles.mainTable}>
        <Trow>
          <th>Instance</th>
          {showStorage&&<th>Storage</th>}
          {showMemory&&<th>Memory</th>}
          {showCpu&&<th>CPU cores</th>}
          {showNetwork&&<th>Network Performance</th>}
          {showOS&&<th>Operating System</th>}
        </Trow>

        {
          searchResult.slice(slide*6,(slide*6)+6).map((instance)=>(
            <Trow instanceName={instance.instance.instance_name} instance={instance}>
              {showStorage&&<td>{instance.instance.storage}</td>}
              {showMemory&&<td>{instance.instance.memory}</td>}
              {showCpu&&<td>{instance.instance.vcpuCore.coreCount}</td>}
              {showNetwork&&<td>{instance.instance.network_performance}</td>}
              {showOS&&<td>{instance.instance.operatingSystem.operatingSystemName}</td>}
            </Trow>
          ))
        }
      </table>}

      {searchResult.length !== 0 && <div className={styles.btns}>

        <Button onClick={handleSlideBack} style={slide===0?{visibility:"hidden"}:{}}>
          &larr;  {slide} Page
        </Button>

        <Button onClick={handleSlideNext} style={slide===muberOfSlides-1?{visibility:"hidden"}:{}}>
          {slide+2} Page &rarr;
        </Button>

      </div>}
    </div>
  );
}
export default SearchResult ;