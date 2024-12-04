import React, { useContext, useState } from 'react'
import { listContext } from '../App';
import { NavLink } from 'react-router-dom';

const AddEmp = () => {

    const {employeelist,setemployeelist} =useContext(listContext)

    const [formValue, setFormValue] = useState({
        EmployeeName:'',
        EmployeeID:'',
        Designation:'',
        Email:'',
        Education:'',
        Address:'',
        JoiningDate:'',
        Performance:'normal'
    }

    );
    
    const handleChange = (e) => {
        const {name,value} =e.target;
        setFormValue({...formValue,[name]:value})
        
    };
   const handleSubmit = (e) =>{
    e.preventDefault();
    setemployeelist([...employeelist,formValue]);
    }
    console.log('employe list',employeelist)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header '>
                            <h4 className='m-2'> ADD Employee </h4>
                        </div>
                        <div className='card-body'>
                            <form action='' onSubmit={handleSubmit}>
                                <div className='row -gap-10'>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>EMPLOYEE NAME</label>
                                        <input type='text' placeholder='Employee Name' className='form-input' name='EmployeeName' value={formValue?.EmployeeName} onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>EMPLOYEE ID</label>
                                        <input type='text' placeholder='Employee Id' className='form-input'name='EmployeeID' value={formValue?.EmployeeID} onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>DESIGNATION</label>
                                        <input type='text' placeholder='Designation' className='form-input' name='Designation' value={formValue?.Designation}  onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>Email</label>
                                        <input type='text' placeholder='Email' className='form-input' name='Email' value={formValue?.Email}  onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>EDUCATION</label>
                                        <input type='text' placeholder='EDUCATION' className='form-input' name='Education' value={formValue?.Education}   onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>ADDRESS</label>
                                        <input type='text' placeholder='Address' className='form-input' name='Address' value={formValue?.Address}  onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>JOINING DATE</label>
                                        <input type='date' placeholder='Joining Date' className='form-input' name='JoiningDate' value={formValue?.JoiningDate}  onChange={handleChange}></input>
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor='' className='font-size-13'>PERFORMANCE</label>
                                        <select  id='' className='form-input' value={formValue?.Performance} name='Performance' >
                                            <option value="">SELECT</option>
                                            <option value="normal">NORMAL</option>
                                            <option value="average">AVERAGE</option>
                                            <option value="excelent">EXCELLENT</option>
                                        </select>
                                    </div>
                                    <div className='row'>
                                        <div className=' d-flex justify-content-end'>
                                            <button  className='btn btn-primary' type='submit'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmp;

