import styles from './SearchResult.module.css' ;
import Trow from './Trow';

function SearchResult({filterValue , searchResult}){
  const{showStorage , showMemory , showCpu , showNetwork , showOS} = filterValue ; 
  return (
    <div className="searchResult">
      <table data-testid="select table" class={styles.mainTable}>
        <Trow>
          <th>Instance</th>
          {showStorage&&<th>Storage</th>}
          {showMemory&&<th>Memory</th>}
          {showCpu&&<th>CPU cores</th>}
          {showNetwork&&<th>Network Performance</th>}
          {showOS&&<th>Operating System</th>}
        </Trow>

        {
          searchResult.map((instance)=>(
            <Trow instanceName={instance.instance_name}>
              {showStorage&&<th>{instance.storage}</th>}
              {showMemory&&<th>{instance.memory}</th>}
              {showCpu&&<th>{instance.vcpuCore}</th>}
              {showNetwork&&<th>{instance.network_performance}</th>}
              {showOS&&<th>{instance.operatingSystem}</th>}
            </Trow>
          ))
        }
      </table>
    </div>
  );
}
export default SearchResult ;