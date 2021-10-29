import { React, useState, useEffect, useCallback } from 'react'

import { subDays, eachDayOfInterval } from 'date-fns';


export default function Total(props) {
    const [startDate, setStartDate] = useState(props.startDate)
    const [endDate, setEndDate] = useState(props.endDate)
    const [normalDayPrice, setNormalDayPrice] = useState(props.normalDayPrice)
    const [holidayPrice, setHolidayPrice] = useState(props.holidayPrice)
    const [totalNormalNights, setTotalNormalNights] = useState()
    const [totalHolidayNights, setTotalHolidayNights] = useState()
    const [total, setTotal] = useState()

    useEffect(() => {
        if(startDate===undefined||endDate===undefined){
            setTotalNormalNights(0)
            setTotalHolidayNights(0)
            setTotal(0)
        }
        
    }, [])

    useEffect(() => {
        if (endDate > startDate) {
            const eachPrice = eachDayOfInterval({
    
                start: startDate,
                end: subDays(endDate, 1),
            })
                .map(day => day.getDay(day))
                .map(day => {
                    const holiday = day === 0 || day === 5 || day === 6;
        
                    const pricePerDay = holiday ? holidayPrice : normalDayPrice;
        
                    return pricePerDay;
                })

                console.log(eachPrice)
            
                setTotalNormalNights(
                    eachPrice.filter((price)=>{return price===normalDayPrice}).length
                )  
                setTotalHolidayNights(
                    eachPrice.filter((price)=>{return price===holidayPrice}).length
                )  
        
            const total = eachPrice.reduce((sum, currentPrice) => {
                return sum + currentPrice;
            })
    
            setTotal(total)
        }
    }, [startDate, endDate])

    useEffect(() => {
        setStartDate(props.startDate)
        setEndDate(props.endDate)
        setNormalDayPrice(props.normalDayPrice)
        setHolidayPrice(props.holidayPrice)


        console.log(startDate)
        console.log(endDate)
        console.log(total)
        
        
    }, [props, startDate, endDate])

    return (
        <div>
            <ul>
                <li>
                    <span >
                        Weekday ${normalDayPrice} x {totalNormalNights} night(s)
                    </span>
                    <span >NT${normalDayPrice * totalNormalNights}</span>
                </li>
                <li>
                    <span>
                        Weekend ${holidayPrice} x {totalHolidayNights} night(s)
                    </span>
                    <span >NT${holidayPrice * totalHolidayNights}</span>
                </li>
                <li>
                    <span>Total</span>
                    <span>NT${total}</span>
                </li>
            </ul>
        </div>
    )
}