
import './App.css';
import AuthCard from './components/authorizationForms/AuthCard';
import Button from './components/partsCoponents/Button';
import Input from './components/partsCoponents/Input';
import { SetStateAction, useState , useRef } from 'react';


function App() {

  const ref = useRef('ak');
  console.log(ref.current  +  " onClickamde ")



    const [count , setCount] = useState();
    return (
      <div className="App">
        <h1 className='text-black-500 text-center mt-[20px]'>Hello</h1>    

        <Button 

        // sakeee 
          name={ref.current} 
          className='w-[80px] h-[35px] bg-gray-500 rounded-[4px] m-auto'
          onclicke={(e) => {
            ref.current = 'sake' 
            console.log("onClickis dros " + ref.current) 
          }}        
        /> 
      </div>
    );

 }

  


export default App;
