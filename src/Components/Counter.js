import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/features/counter";

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <p>{count}</p>
        </div>
    );
}