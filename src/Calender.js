/**
 * presents month days (7 days a week, starting sunday)
 * on each  day, it will have :
 *      the date number + 
 *      month name + 
 *      if we have a shift that day?
 *      if that shift is over
 * once clikced a day 
 *      the day is marked as done
 *      if the day has shit in it, we'll present a sticker
 */
import { useEffect, useState } from "react";
import { Day } from "./Day";
import { getDonesStorage, setDonesStorage } from "./storageUtil";

const month = "July";
const days = new Array(31).fill(0).map((num, index) => index + 1)
const offset = new Array(6).fill(0).map((num, index) => index + 1)
const shitDates = new Set([2, 6, 16, 2])


//[1,2,3].map(i=>i*2) => [2,4,6]
//[1,2,3].filter(i=>i>2) => [3]

export const Calendar = () => {
    const [dones, setDones] = useState(getDonesStorage())

    useEffect(() => {
        setDonesStorage(dones);
    }, [dones])


    const onDatClicked = (day) => {
        const isExisting = dones.includes(day);
        if (isExisting) {
            setDones(dones.filter(tempDay => tempDay !== day))
        }
        else {
            setDones([...dones, day])
        }
    }

    return <>
        <div className="calendar">

            {offset.map(empty => <div></div>)}
            {days.map(day => <Day hasShift={shitDates.has(day)}
                monthName={month}
                dayNumber={day}
                isDone={dones.includes(day)}
                onClick={() => onDatClicked(day)}
            />)}
        </div>

    </>

}
