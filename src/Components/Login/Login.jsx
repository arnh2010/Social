import React from "react";
import { Formik, Form, Field, useFormik } from 'formik';
import { MaxLengthAC, Required } from "../../Utils/Validators/validators";
import { Input ,Element} from "../Common/FormControls/FormsControl";
import { getLogin } from "../../Redux/AuthReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as yup from  "yup"

// const LoginForm = (props) => {

//   const formik = useFormik({
//     initialValues:{ login: '', password: '', rememberMe: '' }, 
//     onSubmit:(values,submitProps) =>{
//         props.getLogin(values.login,values.password,values.rememberMe,submitProps.setStatus)
//         },
//     validationSchema: yup.object({
//         login: yup.string().required("required").min(3,"3").max(15,"10"), 
//         password: yup.string().required("required").min(3,"3").max(15,"10")}) 
//                            })

// return(
// <form onSubmit={formik.handleSubmit}>
// <div><input name="login" type="text"  placeholder="login" value={formik.values.login} 
// onChange={formik.handleChange} onBlur={formik.handleBlur}/></div>
// {formik.errors && formik.touched.login ? <p>{formik.errors.login}</p> : null}
// <div><input name="password" type="text"  placeholder="password" value={formik.values.password} 
// onChange={formik.handleChange} onBlur={formik.handleBlur}/></div>
// {formik.errors && formik.touched.password ? <p>{formik.errors.password}</p> : null}
// <div><input name="rememberMe" type="checkbox"  placeholder="rememberMe" value={formik.values.rememberMe}/></div>

// {/* <Element name="login" type="text" formik={formik} value={formik.values.login}/>
// <Element name="password" type="text" formik={formik} value={formik.values.password}/>
// <Element name="rememberMe" type="checkbox" formik={formik} value={formik.values.rememberMe}/> */}
// <button type="submit">Login</button>
// </form>
// )}



const LoginForm = (props) => (<Formik 
initialValues={{ login: '', password: '', rememberMe: '' }} 

onSubmit={(values,submitProps) =>{
props.getLogin(values.login,values.password,values.rememberMe,submitProps.setStatus)
submitProps.resetForm()}}
validationSchema= {yup.object({
           login: yup.string().required("required").min(3,"3").max(15,"10"), 
           password: yup.string().required("required").min(3,"3").max(15,"10")}) 
                              }
>


{/*  
.p {margin:0;
margin-bottom:0.25rem;
color:red;
font-size:0.5rem;} */}




   {({ errors, touched,status }) => (
<Form>
      <div>
      <Field validate={Required} name="login" placeholder="login" component={Input} />
      </div>
      <div>
      <Field validate={Required} name="password" placeholder="password" component={Input} />
      </div>
      <div>
      <Field name="rememberMe" component= {Input} type="checkbox" />
      </div>
      <div>{ (status) ? status.error[0] :"" }</div>
       <div>
      <button type="submit" >Login</button>
      </div>
      </Form>
  )}
</Formik>)

const Login = (props) => {
  if  (!props.isLogin){
    return (
        <div>
       <LoginForm getLogin={props.getLogin} props={props}/>
        </div>
    )}
    else {return <Navigate to={'/Profile/'} />}
}

 const mapStateToProps = (state)=> {
    return ({isLogin: state.AuthPage.isLogin              
        })
 }

export default connect(mapStateToProps,{getLogin})(Login)