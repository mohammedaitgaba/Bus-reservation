// import  {useState,useMemo} from 'react';
// import {createContext} from "react";
// import {toast} from 'react-toastify';


// export const AuthContexts = createContext(null)

// const AuthContext = ({children}) => {
//   let userId = ""
//   if (localStorage.getItem('user_id')) {
//     userId = localStorage.getItem('user_id')
//   }


// //   const [state, setState] = useState({
// //     loggedUserId: userId,
// //     loggedFirstname: "",
// //     loggedLastname: "",
// //     loggedPhone: "",
// //     loggedEmail: "",
// //     loggedToken:""
// // })

// // const stateWithSetters = useMemo(() => {
// //   const obj = {};
// //   Object.keys(state).forEach(key => {
// //       obj[key] = state[key];
// //       const setterName = key[0].toUpperCase() + key.slice(1);
// //       console.log(setterName);
// //       obj[`set${setterName}`] = (val) => {
// //           setState(v => ({...v, [key]: typeof val === "function" ? val(v[key]) : val}))
// //       }
// //   })
// //   return obj;
// // }, [state])


// // sign_up

// const Sign_up =(Data)=>{
//   console.log("jfjfjf",Data);
//   fetch('http://localhost:5000/api/users/register',{
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(Data)
//   }).then(res => res.json())
//   .then(data =>{
//       if (data.message ==="succesfully created") {
//           // setFormData({
//           //     Fname:'',
//           //     Lname:'',
//           //     Phone:"",
//           //     Email:'',
//           //     Password:'',
//           //     PasswordConfirmation:''
//           // })
//           toast.success('succesfully Registred !', {
//               position: toast.POSITION.TOP_CENTER
//           });
//           // setLoggedUserId(() => data.id)
//           // setLoggedFirstname(data.firstname)
//           // setLoggedLastname(data.lastname)
//           // setLoggedPhone(data.Phone)
//           // setLoggedEmail(data.Email)
//           // setLoggedToken(data.token)
//       }
//       else if (data.message ==="Already existed") {
//           toast.error('User Already existed !', {
//               position: toast.POSITION.TOP_CENTER
//           });
//       }
//       else{
//           toast.error('Something went wrong Please verify your data!', {
//               position: toast.POSITION.TOP_CENTER
//           });
//       }
//   })
// }
// // const value=useMemo(()=>({Sign_up}),[Sign_up])
// const values={Sign_up}
//   return (
//   <AuthContexts.Provider value={values}>
//     {children}
//   </AuthContexts.Provider> )
// }

// export default AuthContext