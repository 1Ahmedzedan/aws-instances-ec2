import styles from './Filter.module.css' ;
function Filter({handleFilter , filterValue}){
  return (
    <div className={styles.filter}>

      <p className={styles.title}>Filter search result</p>
      <div className={styles.checkBoxes}>
        <div className={styles.check}>
          {filterValue.showNetwork&&<img src="img\checked.svg" 
          alt="checked"
          onClick={()=>handleFilter({type:"clickNetwork"})}/>}
          {!filterValue.showNetwork&&<img src="img\unchecked.svg" 
          alt="unchecked"
          onClick={()=>handleFilter({type:"clickNetwork"})}/>}
          <p>Network</p>
          
        </div >

        <div className={styles.check}>
          {filterValue.showMemory&&<img src="img\checked.svg" 
          alt="checked"
          onClick={()=>handleFilter({type:"clickMemory"})}/>}
          {!filterValue.showMemory&&<img src="img\unchecked.svg" 
          alt="unchecked"
          onClick={()=>handleFilter({type:"clickMemory"})}/>}
          <p>Memory</p>
        </div>

        <div className={styles.check}>
            {filterValue.showStorage&&<img src="img\checked.svg" 
            alt="checked"
            onClick={()=>handleFilter({type:"clickStorage"})}/>}
            {!filterValue.showStorage&&<img src="img\unchecked.svg" 
            alt="unchecked"
            onClick={()=>handleFilter({type:"clickStorage"})}/>}
            <p>Storage</p>
        </div>

        <div className={styles.check}>
            {filterValue.showCpu&&<img src="img\checked.svg" 
            alt="checked"
            onClick={()=>handleFilter({type:"clickCpu"})}/>}
            {!filterValue.showCpu&&<img src="img\unchecked.svg" 
            alt="unchecked"
            onClick={()=>handleFilter({type:"clickCpu"})}/>}
            <p>Cpu</p>
        </div>

        <div className={styles.check}>
            {filterValue.showOS&&<img src="img\checked.svg" 
            alt="checked"
            onClick={()=>handleFilter({type:"clickOS"})}/>}
            {!filterValue.showOS&&<img src="img\unchecked.svg" 
            alt="unchecked"
            onClick={()=>handleFilter({type:"clickOS"})}/>}
            <p>OS</p>
        </div>
      </div>
    </div>
  );
}
export default Filter ;