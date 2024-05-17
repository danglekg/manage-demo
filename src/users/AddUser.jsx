import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""    
    })//tao thang nay de no co the thay doi gia tri va truyen vao sql

    const{name,username,email}=user// thang nay de goi vao value trong input de nhap du lieu vao truyen vao day thi no bang user

 

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit=async (e)=>{
        e.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện trong trường hợp này là gửi form đi và làm tải lại trang
        await axios.post("http://localhost:8080/user",user)//Sử dụng thư viện Axios để thực hiện một HTTP POST request tới địa chỉ http://localhost:8080/user, gửi dữ liệu người dùng (user) đi. Hàm này được gán với từ khóa await, cho phép nó đợi cho đến khi request hoàn thành trước khi tiếp tục thực hiện các dòng code tiếp theo.
        navigate("/");// dua web den 1 duong dan cu the trong day la di ve trang truoc
    }

  return (

    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>

                    <input type="text"
                    className="form-control" 
                    name="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={(e) => onInputChange(e)}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">UserName</label>
                    <input type="text"
                    className="form-control" 
                    name="username"
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">E-mail</label>
                    <input type="text"
                    className="form-control" 
                    name="email"
                    placeholder="Enter your email address"
                    value={user.email}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>  
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link type="submit" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
// Link nhu 1 cai button khi bam vao no se nhay vao cho to="/" thi no dua ve / nen no se lui ve 1 trang
