import * as yup from "yup"

export const SignupSchema = yup 
.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    gender: yup.string().required("gender is required"),
})

.required()

export const expenseSchema = yup 
.object({
    description: yup.string().required("Description is required"),
    amount: yup.number().required("Amount is required"),
})

.required()