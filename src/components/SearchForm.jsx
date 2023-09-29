import { useState } from 'react';
import Button from './Button';
import styles from './SearchForm.module.css' ;

function SearchForm(){
  const [region , setRegion] = useState("") ; 
  const [cpu , setCpu] = useState("") ; 
  const [OS , setOS] = useState("") ; 

  return (
    <div className={styles.SearchForm}>
      <form>
        <select
          name="region"
          id="region"
          defaultValue="default"
          data-testid="select region"
          onChange={(e) => setRegion(e.target.value)}
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
          onChange={(e) => setCpu(e.target.value)}
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
          onChange={(e) => setOS(e.target.value)}
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