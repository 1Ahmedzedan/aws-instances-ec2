import styles from './SearchResult.module.css' ;
import Trow from './Trow';

function SearchResult({filterValue}){
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

        <Trow instanceName="Instance1">
          {showStorage&&<td>Storage1</td>}
          {showMemory&&<td>Memory1</td>}
          {showCpu&&<td>CPU cores1</td>}
          {showNetwork&&<td>Network Performance1</td>}
          {showOS&&<td>Operating System1</td>}        
        </Trow>

        <Trow instanceName="Instance2">
          {showStorage&&<td>Storage2</td>}
          {showMemory&&<td>Memory2</td>}
          {showCpu&&<td>CPU cores2</td>}
          {showNetwork&&<td>Network Performance2</td>}
          {showOS&&<td>Operating System2</td>}        
        </Trow>

        <Trow instanceName="Instance3">
          {showStorage&&<td>Storage3</td>}
          {showMemory&&<td>Memory3</td>}
          {showCpu&&<td>CPU cores3</td>}
          {showNetwork&&<td>Network Performance3</td>}
          {showOS&&<td>Operating System3</td>}
        </Trow>

      </table>
    </div>
  );
}
export default SearchResult ;