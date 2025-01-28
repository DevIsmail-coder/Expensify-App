import * as yup from "yup"

export const SignupSchema = yup 
.object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    phone_number: yup.string().required("Phone Number is required"),
    password: yup.string().required("Password is required"),
})

.required()