import React from 'react'

export const Input =({field, form, ...props})=>{
    debugger
    return (
        <div>
    <input {...field} {...props} />
    <p> {form.errors && form.touched[field.name] ? form.errors[field.name] :null}</p>
  </div>)
}


// export const Element = (props) => {
//   debugger
//   return (
//     <div>
//        <div>
//       <input {...props}
//         id={props.name}
//         placeholder={props.name}
//         type={props.type}
//         // value={props.formik.values[props.name]}
//         onChange={props.formik.handleChange}
//         onBlur={props.formik.handleBlur}
//       />
//        </ div>
//        <div>
//         {props.formik.errors && props.formik.touched[props.name] ? <p>{props.formik.errors[props.name]}</p> : null}
//        </div>
//        </div>)
// }

