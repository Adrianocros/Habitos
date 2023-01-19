import { generateRangeBetweenDatesFromYearBeginning } from "../utils/generate-range-between-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekdays = ['D','S','T','Q','Q','S','S']


const summaryDates = generateRangeBetweenDatesFromYearBeginning()

const minimumSummaryDaysSize = 18 * 7
const amoutOffDaysToFill = minimumSummaryDaysSize - summaryDates.length

console.log(summaryDates)

export function SummaryTable(){
    return(
      <div className="w-full flex">
        <div className="grid grid-rows-7 grid-flow-row gap-3">
            {weekdays.map((weekday, i) => {
                return(
                    <div key={`${weekday}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex font-bold items-center justify-center">
                        {weekday}
                    </div>
                )
            })}
        </div>
        <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date=> {
            return<HabitDay key={date.toString()}/>
          })}
           {amoutOffDaysToFill > 0 && Array.from({length:amoutOffDaysToFill }).map((_, i) => {
            return(
                <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 curso-not-allowed "></div>
            )
           })}
        </div>
      </div>  
    )
}