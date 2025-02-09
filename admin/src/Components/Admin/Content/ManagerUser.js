import TableUser from "./TableUser"
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { API_BASE_URL } from "../../Constraint/api";
import React, { useState, useEffect } from "react";
const ManagerUser = (props) =>{

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        // setPreviewContent(item);
        // setIsChange(!isChange)
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const HandleDeleteExam = (id) => {
        // const insertData = async () => {
        setLoading(true);
        axios
          .delete(
            API_BASE_URL + "api/test/all" + id,
            // {Name:Name,description:description},
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function (response) {
            console.log(response.data);
            fetchData();
    
            // setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
        // };
      };
    
    const fetchData = async () => {
        setLoading(true);
        try {
          const { data: response } = await axios.get(
            API_BASE_URL + "api/test/all"
          );
          setData(response);
          setLoading(false);
        } catch (error) {
          console.error(error.message);
        }
        // setLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const RowExam = ({ user }) => {
        if (!user) {
          return <tr></tr>;
        }
    
        // const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
          <tr>
            <td>{user._id}</td>
            <td>
              {user.username}
              
            </td>
            <td>
              {user.email}
            </td>
            <td>
              {user.roles}
            </td>
           
            <td className="project-actions text-center">
              
              <button
                onClick={() => handleShow()}
                className="btn btn-danger btn-sm mx-1"
                href="#"
              >
                <i className="fas fa-trash"></i>
                Delete
              </button>
            </td>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Xóa Người Dùng</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn có chắc chắn xoá "{user.username}" không?
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-sm mx-1" onClick={handleClose}>
                  Cancel
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  variant="primary"
                  onClick={() => {
                    HandleDeleteExam(user._id);
                    // handleClose;
                  }}
                >
                  Delete
                </button>
              </Modal.Footer>
            </Modal>
          </tr>
        );
      };

    return (
      <div className='qizz-container'>
      <div className='title'>
            Manage Users
      </div>
      
      <hr/>

        <div className="manager-user-container">
             <div className="card-body p-0">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th style={{ width: "1%" }} className="text-center">ID</th>
                    <th style={{ width: "20%" }} className="text-center">UserName</th>
                    <th style={{ width: "20%" }} className="text-center">Email</th>
                    {/* <th>Project Progress</th> */}
                    <th style={{ width: "18%" }} className="text-center">
                      Role
                    </th>
                    <th style={{ width: "20%" }} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.map((item) => {
                        return <RowExam key={item._id} user={item} />;
                      })
                    : null}
                </tbody>
              </table>
            </div>
             </div>
        </div>
    )
}
export default ManagerUser