import React, { useEffect, useState } from 'react'
import './Food.css'
import Header from '../Header/Header'
import { MdDeleteForever } from "react-icons/md";
// import { useNavigate } from 'react-router-dom'
import { expenseSchema } from '../../schema/SignupSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

const url = 'https://expensify-76dn.onrender.com/api/v1';

const Food = () => {
  // const navigate = useNavigate()
  const [expense, setExpense] = useState([])
  const [editExpense, setEditExpense] = useState(null);
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(expenseSchema),
  })

  const id = localStorage.getItem('userEmail');

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post(`${url}/user-expenses/${id}`, data)
      console.log('success', response.data)
      reset()
      setLoading(false)
      fetchproduct()
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }


  const fetchproduct = () => {
    axios.get(`${url}/user-expenses/${id}`)
      .then((res) => {
        // console.log(res.data.data)
        setExpense(res?.data?.data)
      })
  }

  const deleteExpense = async (id) => {
    await axios.delete(`${url}/user-expenses-description/${id}`)
    fetchproduct()
  }
  const updateExpense = async (id, updatedData) => {
    try {
      const response = await axios.put(`${url}/user-expenses-amount/${id}`, updatedData);
      console.log("Expense updated:", response.data);

      // Refresh the expense list after updating
      fetchproduct();
      setEditExpense(null); // Clear edit mode
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleAddExpenses = () => {
    handleSubmit(onSubmit)
  }
  const totalExpense = expense.reduce((acc, item) => acc + Number(item.amount), 0);

  useEffect(() => {
    fetchproduct()
  }, [])

  return (
    <div className='Foodbody'>
      <div className='Foodbodymain'>
        <Header />
        <div className='Foodwrap'>
          <form className='Foodcontainer' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='Foodh2tag'>Expenses</h2>
            <p className='Foodptag'>Filling The Correct Information Below To Get Your Daily Expenses On Food</p>
            <span className='foodspan1'>
              <h4 className='foodh4'>Input Description</h4>
              <input {...register("description")} className='FoodInput' type="text" placeholder='items' />
              <p className='SignupInputWrappperError'>{errors?.description?.message}</p>
            </span>
            <span className='foodspan1'>
              <h4 className='foodh4'>Input Price</h4>
              <input {...register("amount")} className='FoodInput' type="text" placeholder='$000' />
              <p className='SignupInputWrappperError'>{errors?.amount?.message}</p>
            </span>

            <button className='foodbutton'>{loading ? 'Loading...' : 'Add'}</button>
          </form>
          <div className='Foodcontainer2'>
            <h3 className='Foodcontainer2h3'>List</h3>
            <div className='Foodcontainer2wrap'>
            {expense.map((item) => (
              <div key={item.id} className='Foodcontainer2div'>
                {editExpense?.id === item.id ? (
                  <div className='foodediting'>
                  <span className='foodeditingspan'>
                  <input
                      type="text"
                      value={editExpense?.description || ""}
                      onChange={(e) => setEditExpense({ ...editExpense, description: e.target.value })}
                      className='foodeditingspaninput'
                    />
                    <input
                      type="number"
                      value={editExpense?.amount || ""}
                      onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })}
                       className='foodeditingspaninput'
                    />
                  </span>
                 <span  className='foodeditingspan'>
                 <button onClick={() => updateExpense(editExpense.userId, editExpense)} className='foodeditdelespanedit'>Save</button>
                 <button onClick={() => setEditExpense(null) } className='foodeditdelespanedit'>Cancel</button>
                 </span>
                  </div>
                ) : (
                  <span className='Foodcontainer2divspan'>
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                  </span>
                )}
                <span className='foodeditdelespan'>
                  <button onClick={() => setEditExpense(item)} className='foodeditdelespanedit'>Edit</button>
                  <MdDeleteForever onClick={() => deleteExpense(item.userId)} className='Foodcontainericon' />
                </span>
              </div>
            ))}
             </div>
             <span>Total expense: {totalExpense}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food



