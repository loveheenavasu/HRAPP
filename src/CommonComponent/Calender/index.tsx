// import React from "react";
// import { StyleSheet } from "react-native";
// import { Calendar, LocaleConfig } from 'react-native-calendars';

// const CustomCalender = ()=>{

// const getFormattedDate = (displayDate: boolean = false,dateToformat:string='') => {  
    
//     let current_Date = new Date();
//     let formatMonth = current_Date.getMonth() + 1 < 10 ? `0${current_Date.getMonth() + 1}` : current_Date.getMonth() + 1;
//     let formatDate = current_Date.getDate() < 10 ? `0${current_Date.getDate()}` : current_Date.getDate();
      
//     if(dateToformat){
//       return dateToformat?.split('-')?.reverse()?.join(',')?.replaceAll(',', '-');
//     }
//     if (displayDate) {
//       let ddmmyyyy = `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`?.split('-')?.reverse()?.join(',')?.replaceAll(',', '-');
//       return ddmmyyyy;
//     }
//     console.log('Formatted Date--->', `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`);
//     return `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`
//   }


//   return(
//     <Calendar
//           style={[styles.main,{...calendarStyle}]}
//           // Specify the current date
//           current={'2023-04-01'}
//           // Callback that gets called when the user selects a day
//           onDayPress={setDates}
          
//         />
//   )
// }

// export default CustomCalender

// const styles = StyleSheet.create({
//    main:{
//         borderWidth: 1,
//         borderColor: 'gray',
//         height: 350,
//       }
// })