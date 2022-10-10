import { inputTypes } from "@/helper/common";

import CInputFiled from "../input";

import { Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
// import { LoadingButton } from '@mui/lab';
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
  registeredNumber: string()
    .nonempty("Please enter a valid Registered Number")
    .regex(
      new RegExp(/^[0-9]+$/),
      "Registered Number must contain numbers only"
    )
    .min(8, "Registered Number must be more than 8 characters")
    .max(32, "Registered Number must be less than 32 characters"),
  phoneNumber: string()
    .nonempty("Phone Number is required")
    .min(8, "Phone Number must be more than 8 characters"),
  mobileNumber: string()
    .nonempty("Mobile Number is required")
    .min(8, "Mobile Number must be more than 8 characters"),
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
    registeredNumber: "",
    phoneNumber: "",
    mobileNumber: "",
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
    <div className={styles["guest-signIn-page-wrapper"]}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
        className={styles["signup-page-inner-wrapper"]}
      >
        <span className={styles["heading-top"]}>User Sign Up</span>

        <div className="flex flex-col ">
          <div className="flex flex-row flex-wrap gap-x-3.5">
            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
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
            </div>

            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
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
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-x-3.5">
            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
              <CInputFiled
                type={inputTypes.PHONE}
                handleChange={handleChange}
                value={info.phoneNumber}
                name="phoneNumber"
                label="Phone Number"
                required
                error={!!errors["phoneNumber"]}
                helperText={
                  errors["phoneNumber"] ? errors["phoneNumber"].message : ""
                }
                rest={register("phoneNumber")}
              />
            </div>

            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
              <CInputFiled
                type={inputTypes.PHONE}
                handleChange={handleChange}
                value={info.mobileNumber}
                name="mobileNumber"
                label="Mobile Number"
                required
                error={!!errors["mobileNumber"]}
                helperText={
                  errors["mobileNumber"] ? errors["mobileNumber"].message : ""
                }
                rest={register("mobileNumber")}
              />
            </div>
          </div>
          <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
            <CInputFiled
              type={inputTypes.TEXT}
              handleChange={handleChange}
              value={info.registeredNumber}
              name="registeredNumber"
              label="Registered Number"
              required
              error={!!errors["registeredNumber"]}
              helperText={
                errors["registeredNumber"]
                  ? errors["registeredNumber"].message
                  : ""
              }
              rest={register("registeredNumber")}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-x-3.5">
            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
              <CInputFiled
                type={inputTypes.PASSWORD}
                handleChange={handleChange}
                value={info.password}
                name="password"
                label="Password"
                required
                helperText={
                  errors["password"] ? errors["password"].message : ""
                }
                error={!!errors["password"]}
                rest={register("password")}
              />
            </div>

            <div className={`py-2 gap-4 ${styles["inputFieldWidth"]}`}>
              <CInputFiled
                type={inputTypes.PASSWORD}
                handleChange={handleChange}
                value={info.passwordConfirm}
                name="passwordConfirm"
                label="Password Confirm"
                required
                error={!!errors["passwordConfirm"]}
                helperText={
                  errors["passwordConfirm"]
                    ? errors["passwordConfirm"].message
                    : ""
                }
                rest={register("passwordConfirm")}
              />
            </div>
          </div>

       

          

          <div className="">
            <button className={styles["sign-up-button"]} type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default RegisterPage;
