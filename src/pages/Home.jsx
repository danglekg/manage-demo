import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
// cai nay la tao table cung len bootstrap roi go table chep code vo la dc
export default function Home() {

  const [users,setUsers]=useState([])

  const {id}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []); // tao mot cai mang trong [] de cai nay chi chay 1 lan khi mo trang

  // su dung duong dan get tu than postman de lay du lieu nguoi dung
  // dat cai setUsers la result.data o trong Console thi users se lay du lieu trong data console
  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)//bo cai axios di thi ta dc duong dan cua post hieu chu await chi don gian la cho thuc hien xong cai nay moi lam cai o duoi
    loadUsers()
  }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">{/*tao style o day lun*/}
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">userName</th>
      <th scope="col">email</th>
      <th scope="col">Aticon</th>
    </tr>
  </thead>
  <tbody>
    {/*dua du lieu vao bang dung useState users.ten trong backend*/}
    {
      users.map((user,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
            <Link className="btn btn-primary mx-2"
            to={`/viewuser/${user.id}`}
            >View</Link>
               
            <Link className="btn btn-outline-primary mx-2" 
              to={`/edituser/${user.id}`}//cai nay de no vao edit cua thang co id nay
            >Edit</Link>

            <button className="btn btn-danger mx-2"
              onClick={()=>deleteUser(user.id)}
            >Delete</button>

        </td>
        </tr>
      ))
    }

  </tbody>
</table>
        </div>
    </div>
  )
}
