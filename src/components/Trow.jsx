import { useState } from 'react';
import styles from './SearchResult.module.css' ; 
function Trow({children , instanceName , instance}){
    const [show,setShow] = useState(false) ; 
  return (
    <>
      <tr className={styles.mainRow}>
          { instanceName && <th>
            <div className={styles.head}>
              {show ? <img src="img/down.svg" alt="down" onClick={()=>setShow((e)=>!e)}/> : 
              <img src="img/up.svg" alt="up" onClick={()=>setShow((e)=>!e)}/>}
              {instanceName}
            </div>
          </th>}
          {children}
      </tr>
      {show&&
        <>
          <tr className={styles.detailRow}>
            <th colSpan="3">Region</th>
            <th colSpan="3">Price</th>
          </tr>

          {
            <tr className={styles.detailRow}>
              <td colSpan="3">{instance.region.regionLongName}</td>
              <td colSpan="3">{instance.pricePerHour}</td>
            </tr>
          }
          
          {/* <tr className={styles.detailRow}>
            <td colSpan="3">region1</td>
            <td colSpan="3">price1</td>
          </tr>
          <tr className={styles.detailRow}>
            <td colSpan="3">region2</td>
            <td colSpan="3">price2</td>
          </tr>
          <tr className={styles.detailRow}>
            <td colSpan="3">region3</td>
            <td colSpan="3">price3</td>
          </tr> */}
        </>
      }
    </>
  );
}
export default Trow ;