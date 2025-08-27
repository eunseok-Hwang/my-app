import useStore from "./Store";

export default function GrandCild(){
    const {theme, toggleTheme} = useStore();

    return (
        <div style={{
            border: "1px solid #666",
            margin: "1rem",
            padding: "1rem",
            backgroundColor: theme === "light" ? "#ddd" : "#111",
            color: theme === "light" ? "black" : "white",
        }}>
            <p>GrandChild 컴포넌트에서 테마 생태 사용중</p>
            <button onClick={toggleTheme}>테마 전환 (GrandChilde)</button>
        </div>
    )
}