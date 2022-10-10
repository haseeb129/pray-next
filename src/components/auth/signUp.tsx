// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import React, { useEffect, useState } from 'react';

import { inputTypes } from "@/helper/common";

import CInputFiled from "../input";
// import styles from './index.module.scss';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { literal, object, string, TypeOf } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// export interface SignUpStateInterfacr {
//   name: string;
//   email: string;
//   password: string;
//   passwordConfirm: string;
// }

// const registerSchema = object({
//   name: string()
//     .nonempty('Name is required')
//     .max(32, 'Name must be less than 100 characters'),
//   email: string().nonempty('Email is required').email('Email is invalid'),
//   password: string()
//     .nonempty('Password is required')
//     .min(8, 'Password must be more than 8 characters')
//     .max(32, 'Password must be less than 32 characters'),
//   passwordConfirm: string().nonempty('Please confirm your password'),
//   terms: literal(true, {
//     invalid_type_error: 'Accept Terms is required',
//   }),
// }).refine((data) => data.password === data.passwordConfirm, {
//   path: ['passwordConfirm'],
//   message: 'Passwords do not match',
// });

// type RegisterInput = TypeOf<typeof registerschema>;

// const signUpUser = (props: any) => {
//   const { onSignUpUser } = props;
//   const [info, setInfo] = useState<SignUpStateInterfacr>({
//     name: '',
//     email: '',
//     password: '',
//     passwordConfirm: '',
//   });

//   const {
//     register,
//     formState: { errors, isSubmitSuccessful },
//     reset,
//     handleSubmit,
//   } = useForm<registerinput>({
//     resolver: zodResolver(registerSchema),
//   });

//   useEffect(() => {
//     if (isSubmitSuccessful) {
//       reset();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isSubmitSuccessful]);

//   const handleLocalSubmit: SubmitHandler<registerinput> = (values) => {
//     console.log(values);
//   };
//   console.log(errors);

//   // const handleLocalSubmit = () => {
//   //   onSignUpUser(info);
//   // };

//   const handleChange = (name: string, value: string) => {
//     setInfo({ ...info, [name]: value });
//   };

//   return (
//     <div className={styles['guest-signIn-page-wrapper']}>
//       <div className={styles['signIn-page-inner-wrapper']}>
//         {/* <div className={styles.logo}>
//           <PersonPinIcon fontSize="large" />
//         </div> */}

//         <span className={styles['heading-top']}>User Sign Up</span>
//         <div className="flex flex-col ">
//           <div className="py-2">
//             <CInputFiled
//               type={inputTypes.TEXT}
//               handleChange={handleChange}
//               value={info.name}
//               name="name"
//               label="Name"
//               required={true}
//               error={!!errors['name']}
//               helperText={errors['name'] ? errors['name'].message : ''}
//               {...register('name')}
//             />
//           </div>

//           <div className="py-2">
//             <CInputFiled
//               type={inputTypes.EMAIL}
//               handleChange={handleChange}
//               value={info.email}
//               name="email"
//               label="Email"
//             />
//           </div>
//           <div className="py-2">
//             <CInputFiled
//               type={inputTypes.PASSWORD}
//               handleChange={handleChange}
//               value={info.password}
//               name="password"
//               label="Password"
//             />
//           </div>
//           <div className="py-2">
//             <CInputFiled
//               type={inputTypes.PASSWORD}
//               handleChange={handleChange}
//               value={info.passwordConfirm}
//               name="passwordConfirm"
//               label="Confirm Password"
//             />
//           </div>

//           <div className="">
//             <button
//               className={styles['sign-up-button']}
//               onClick={handleSubmit(handleLocalSubmit)}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default signUpUser;
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
// import { LoadingButton } from '@mui/lab';
import Checkbox from "@mui/material/Checkbox";
import styles from "./index.module.scss";

const registerSchema = object({
  name: string()
    .nonempty("Name is required")
    .max(32, "Name must be less than 100 characters"),
  email: string().nonempty("Email is required").email("Email is invalid"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().nonempty("Please confirm your password"),
  
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

type RegisterInput = TypeOf<typeof registerschema>;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<SignUpStateInterfacr>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (name: string, value: string) => {
    setInfo({ ...info, [name]: value });
  };
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<registerinput>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<registerinput> = (values) => {
    console.log(values);
  };
  console.log(errors);

  return (
    <Box sx={{ maxWidth: "30rem" }}>
      <Typography variant="h4" component="h1" sx={{ mb: "2rem" }}>
        Register
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <CInputFiled
          type={inputTypes.TEXT}
          handleChange={handleChange}
          value={info.name}
          name="name"
          label="Name"
          required
          error={!!errors["name"]}
          helperText={errors["name"] ? errors["name"].message : ""}
          rest={register("name")}
        />

        <CInputFiled
          type={inputTypes.EMAIL}
          handleChange={handleChange}
          value={info.email}
          name="email"
          label="Email"
          required
          error={!!errors["email"]}
          helperText={errors["email"] ? errors["email"].message : ""}
          rest={register("email")}
        />

        <CInputFiled
          type={inputTypes.PASSWORD}
          handleChange={handleChange}
          value={info.password}
          name="password"
          label="Password"
          required
          helperText={errors["password"] ? errors["password"].message : ""}
          error={!!errors["password"]}
          rest={register("password")}
        />

        <CInputFiled
          type={inputTypes.PASSWORD}
          handleChange={handleChange}
          value={info.passwordConfirm}
          name="passwordConfirm"
          label="Password Confirm"
          required
          error={!!errors["passwordConfirm"]}
          helperText={
            errors["passwordConfirm"] ? errors["passwordConfirm"].message : ""
          }
          rest={register("passwordConfirm")}
        />

        <div className="">
          <button
            className={styles["sign-up-button"]}
            // onClick={handleSubmit(handleLocalSubmit)}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default RegisterPage;
