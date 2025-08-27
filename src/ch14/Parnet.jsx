
import Child from "./Child";
import useStore from "./Store";


export default function Parnet(){
    const {theme, toggleTheme} = useStore();

    return (
        <div style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white",
            padding: "1rem"
        }}>
            <p>Parent 컴포넌트에서 테마 생태 사용중</p>
            <button onClick={toggleTheme}>테마 전환 (Parent)</button>
            <Child />

        </div>
    )
}