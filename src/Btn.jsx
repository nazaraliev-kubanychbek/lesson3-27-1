import { useDispatch } from "react-redux";
import { addCar, incrementNum, decrementNum, resetNum } from "./redux/reducers/car";

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(resetNum())
            }}>reset</button>
            <button>+5</button>
            <button>-5</button>
        </div>
    );
}

export default Btn;
