import { useCounterStore } from "../store/counterStore"


function CounterBtn() {

    const increase = useCounterStore((state) => state.increase)
    const decrease = useCounterStore((state) => state.decrease)

    return (
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default CounterBtn
