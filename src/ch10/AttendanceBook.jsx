const students = [
    {
        id:1,
        name: "Inje",
    },
    {
        id:2,
        name: "Steve"
    },
    {
        id:3,
        name: "Bill"
    },
    {
        id:4,
        name: "Jeff"
    }
];

export default function AtttendanceBook(props){
    return(
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}