import { db } from './FirebaseConfig'
import  { collection, getDoc, setDoc, doc } from 'firebase/firestore'

export async function GetMonthInfo() {
    try {

      const daysOfMonth = () => {
          var currentMonth = new Date().getMonth();
          console.log(currentMonth);
          var lastDayOfMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
          return(lastDayOfMonth)
      }

      const date = new Date();
      const current_month_year = date.toLocaleString('default', { month: '2-digit' }) + '-' + date.getFullYear();


      const querySnapshot = await getDoc( doc((collection(db, "month")), current_month_year));
        if (querySnapshot.exists()) {
          return (querySnapshot.data());
        } else {

          let newMonth = {};

          for (let i = 1; i <= daysOfMonth(); i++) {
            newMonth = {...newMonth,
              [i]: {
                "19:00": {
                  table1: true,
                  table2: true,
                  table3: true,
                  table4: true
                },
                "20:30": {
                  table1: true,
                  table2: true,
                  table3: true,
                  table4: true
                },
                "22:00": {
                  table1: true,
                  table2: true,
                  table3: true,
                  table4: true
                },
                "23:30": {
                  table1: true,
                  table2: true,
                  table3: true,
                  table4: true
                }
              }
            }
           
          }
          

          await setDoc(doc(db, "month", current_month_year ), 
            newMonth
             )

          return(await (await getDoc( doc((collection(db, "month")), current_month_year))).data())

        }
           

    } catch (err){
      console.log(err)
    }


}


export async function SetBooking(data) {

  try {
    const date = new Date();
    const current_month_year = date.toLocaleString('default', { month: '2-digit' }) + '-' + date.getFullYear();

    await setDoc(doc(db, "month", current_month_year), data, { merge: true });

  } catch (err) {
    console.log(err)
  }

}


export function ClientBookingInfo(name, email, date, time, table) {

  const bookingInfo = {
    email: email,
    date: date,
    time: time,
    table: table
  }

  new Promise ((resolve, reject) => {
    setDoc(doc(db, "users", name ), bookingInfo)
    })

  }
