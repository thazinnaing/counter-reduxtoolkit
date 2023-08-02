import { useSelector , useDispatch} from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react";
import "./Counter.css"

const Counter=()=>{
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount]= useState(0);

    const addValue=Number(incrementAmount);

    const resetAll=()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }

    return(
        <section>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input
                type="text"
                value={addValue}
                onChange={(e)=>setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>

    )
}

export default Counter;