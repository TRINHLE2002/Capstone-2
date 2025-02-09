import React from 'react'
import Modal from "react-bootstrap/Modal";
import  { useState, useEffect } from "react";
// import {useHistory} from 'react-router-dom';
import TextInput from './TextInput.component';
import "./ManageQizz.scss"
import axios from "axios";
import { API_BASE_URL } from '../../../Constraint/api';

const ManageQizz = (props) =>{
    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    // const history = useHistory()
    const handleClose = () => {
    // setPreviewContent(item);
    // setIsChange(!isChange)
    setShow(false);
}
const handleShow = () => setShow(true);

    const HandleInsertExam = () => {
        // const insertData = async () => {
        // setLoading(true);
        axios
          .post(
            API_BASE_URL + "api/exam",
            JSON.stringify({Name,description}),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function (response) {
            if (response.status != 200) {
              return;
            }
            // fetchData();
            // console.log(response);
            // history.push(/edit/${response.data.exam._id}, {
            //   exam: response.data.exam,
            // });
            console.log(response.data.exam);
            // setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
        // };
      };
      const HandleDeleteExam = (id) => {
        // const insertData = async () => {
        setLoading(true);
        axios
          .delete(
            API_BASE_URL + "api/exam/" + id,
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
            API_BASE_URL + "api/exam/all"
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
    
      const RowExam = ({ exam }) => {
        if (!exam) {
          return <tr></tr>;
        }
    
        // const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
          <tr>
            <td>{exam._id}</td>
            <td style={{ textAlign:"center" }}>
              <a>{exam.Name}</a>
            </td>
            <td>
              {exam.description}
              
            </td>
            <td className="project-state">
              {exam.ltype}-{exam.type}
              <span className="badge badge-success"> Success</span>
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
                <Modal.Title>Xóa Bài Thi</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn có chắc chắn xoá bài thi thử "{exam.Name}" không?
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-sm mx-1" onClick={handleClose}>
                  Cancel
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  variant="primary"
                  onClick={() => {
                    HandleDeleteExam(exam._id);
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
            Manage Quizzes
      </div>
      <hr/>
      <div className='add-new'>
        <fieldset className='border rounded-3 p-3'>
           <legend>Add new Quiz:</legend>
                     <TextInput
                        valueProps={""}
                        setTextProps={(newContent) => {setName(newContent)}}
                        placeholder={"name"}
                     />
                    <TextInput
                    valueProps={""}
                    setTextProps={(newContent) => {setDescription(newContent)}}
                    placeholder={"description"}
                    /> 
                    <button className="btn btn-success btn-sm mx-1" onClick={HandleInsertExam}>
                        Thêm
                    </button> 
       </fieldset>
      </div>
      <div className='list-detail'>
      <div className="card-body p-0">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th style={{ width: "1%" }} className="text-center">ID</th>
                    <th style={{ width: "20%" }} className="text-center">Name</th>
                    <th style={{ width: "20%" }} className="text-center">Description</th>
                    {/* <th>Project Progress</th> */}
                    <th style={{ width: "18%" }} className="text-center">
                      Type
                    </th>
                    <th style={{ width: "20%" }} className="text-center">
                      Action    
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.map((item) => {
                        {/* return <RowExam key={item._id} exam={item} />; */}
                         return item.reduce(function(acc,value){
                              console.log(acc+value)
                         },0)
                      })
                    : null}

                   
                </tbody>
              </table>
            </div>
             
      </div>
    </div>
  )
}

export default ManageQizz;