import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { listContext } from '../App';

const ListEmp = () => {

    const { employeelist, setemployeelist } = useContext(listContext);


    return (
        <div className='container-fluid'>
            <div className='row mt-4'>
                <div className='col-12 px-4'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between'>
                            <h4 className='m-2'>Employee List</h4>
                            <NavLink to='/add' className='btn btn-primary'>Create New </NavLink>
                        </div>
                        <div className='body'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">SR.NO</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">DISGNATION</th>
                                        <th scope="col">Performance</th>
                                        <th scope="col">Joining Date</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Education</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employeelist?.map((employe, index) => {
                                            return (
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <td>{employe?.EmployeeName}</td>
                                                    <td>{employe?.EmployeeID}</td>
                                                    <td>{employe?.Email}</td>
                                                    <td>{employe?.Designation}</td>
                                                    <td>{employe?.Performance}</td>
                                                    <td>{employe?.JoiningDate}</td>
                                                    <td>{employe?.Address}</td>
                                                    <td>{employe?.Education}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmp;
