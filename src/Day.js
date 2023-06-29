export const Day = ({ dayNumber, monthName, hasShift, isDone, onClick }) => {

    return <div onClick={onClick} className={"day" + (hasShift ? " shift" : "") + (isDone ? " done" : "")}>
        <p>{dayNumber}</p>
        <p>{monthName}</p>
    </div>
}