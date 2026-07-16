import { useCounterStore } from "../store/counterStore";

function CounterVal(){
    const count = useCounterStore((state) => state.count)

    return <div>Count : {count}</div>
}

export default CounterVal