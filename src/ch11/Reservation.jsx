import { useState } from "react";

export default function Reservation(props){
    const [haveBreakdfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakdfast}, 방문객 수 : ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                
            </label>
        </form>
    )
}