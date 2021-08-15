import {useState} from "react";

const Playground = () => {

    const arr = [{name: 'shanu', age: '2'}, {name: 'Vaibhav', age: '22'}]
    const [arr1, setArr1] = useState(arr);
    console.log(arr);


  const bt=  arr1.map((ee) => {
        return <button className={'btn bg-dark text-light ml-2 ml-auto'}>{ee.name}</button>
    })
    return <>
        {bt}

    </>
};
export default Playground;