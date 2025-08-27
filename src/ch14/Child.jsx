
import GrandCild from "./GrandChild";
import useStore from "./Store";

export default function Child(){
    const {theme, toggleTheme} = useStore();

    return (
        <div style={{
            border: "1px solid gray",
            margin: "1rem",
            padding: "1rem",
            backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
            color: theme === "light" ? "black" : "white",
        }}>
            <p>Child 컴포넌트에서 테마 생태 사용중</p>
            <button onClick={toggleTheme}>테마 전환 (Childe)</button>
            <GrandCild />
        </div>
    )
}