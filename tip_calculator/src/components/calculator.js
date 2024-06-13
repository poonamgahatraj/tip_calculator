import { useState,useEffect } from "react"

export default function Calculator (){
const[bill,setBill]=useState('');
const[tip,setTip]=useState('');
const[people,setPeople]=useState('')
const[totalTip,setTotalTip]=useState('-')
const [tipPerPerson, setTipPerPerson] = useState('-');


useEffect(() => {
    calculateTip();
  }, [bill, tip, people]);


  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipPercentageValue = parseFloat(tip);
    const numberOfPeopleValue = parseInt(people);
   

    const totalTipAmount = (billValue * (tipPercentageValue / 100)) 
    const tipPerPersonAmount = totalTipAmount / numberOfPeopleValue;
    setTotalTip(totalTipAmount.toFixed(2));
    setTipPerPerson(tipPerPersonAmount.toFixed(2));
  };

    return(
        <>
        <form>
<label><b>Bill</b></label><br></br>
<input type="number"  value={bill}  onChange={(e) => setBill(e.target.value)}></input><br></br>
<label><b>Tip percentage</b></label><br></br>
<input type="number"  value={tip}
        onChange={(e) => setTip(e.target.value)}></input><br></br>
<label><b>Number of people</b></label><br></br>
<input type="number"  value={people}
        onChange={(e) => setPeople(e.target.value)}></input><br></br>

<div>
    <p>Total tip: {totalTip} </p>
    <p>Tip per person:{tipPerPerson}</p>
</div>
        </form>
        </>
    )
}