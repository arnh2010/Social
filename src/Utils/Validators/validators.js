import React from 'react'

export function Required(value) {
      if (!value) {return 'Required'}
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = 'Invalid email address';
  //   }
     return undefined
   }

   export const MaxLengthAC = (max)=>{
      return (value)=>{
        if (value.length > max) {
              return 'MaxLength'
            }
            return undefined
      }
   }


// export const MaxLengthAC = (max) => {
//   return (value) => {
//     MaxLength(value, max)
//   }
// }
// function MaxLength(value, max) {
//   if (value.length > max) {
//     return 'MaxLength'
//   }
//   return undefined
// }



  
