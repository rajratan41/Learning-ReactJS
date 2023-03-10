
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';

function App() {

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/")
    // console.log(data);

    const details = data.results[0];
    setDetails(details);
    console.log(details);
  }

  useEffect(() => {
    fetchDetails()
  }, [])
  

  return (
    <div className="App">
      
      <Counter />
          <Card details={details}/>
      {/* <Card name = "Raj Ratan" imgUrl = "https://images.pexels.com/photos/2522672/pexels-photo-2522672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" btn = "Click ME" link = "https://images.pexels.com/photos/2522672/pexels-photo-2522672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" text = "click the below button to see image"/> */}

      {/* <Card imgUrl = "https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" btn = "Click Me" link = "https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" text = "click below"/>

      <Card name = "Naman" imgUrl = "https://images.pexels.com/photos/3532547/pexels-photo-3532547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" btn = "tap me" link = "https://images.pexels.com/photos/3532547/pexels-photo-3532547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" text = "see Image"/> */}

    </div>
  );
}

export default App;
