import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    

    const onInputChanged =  ({ target }) => {
        setInputValue( target.value );
    }
    const onFormSumbit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory(  inputValue.trim() );
        // addCategory( cats =>  [ inputValue ,...cats] );
        setInputValue('');
    }

    


  return (
    <form 
        onSubmit={onFormSumbit}
        action="">
            <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={  onInputChanged}
            />
    </form>
  );
}



