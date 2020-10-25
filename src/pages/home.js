import React,{useState} from 'react'

import {Table} from 'react-bootstrap'
import { Modal,Button,Form } from 'react-bootstrap'

//for generating unique id
import { v4 as uuidv4 } from 'uuid';


//initial data in table
const initialState = [
    {
      id: '1',
      firstname: 'Hari',
      lastname: 'test',
      address: "Banepa",
    },
    {
      id: '2',
      firstname: 'Ram',
      lastname: 'Thapa',
      address: "Ktm",
    },
  ];


const Home=()=>{
    //initalize hook to set list
    const [list,setList]=useState(initialState)

    //set edit it
    const [editId, updteEditId] = useState("");

    //to show add model
    const [addShow, addItemShow] = useState(false);

    //hook for add and edit
    const[firstname,updateFirstName]=useState("");
    const[lastname,updateLastName]=useState("");
    const[address,updateAddress]=useState("");

    //to display edit model
    const [editModelShow, setShow] = useState(false);

    //to close edit model
    const closeEditModel = () => setShow(false);

    //save edited date

    const saveEditData=()=>{
        setShow(false);
        console.log(editId);
          //remove previous one
          const newList = list.filter((item) => item.id !== editId);

                  const editedItem={
                    id:editId,
                    firstname:firstname,
                    lastname:lastname,
                    address:address
                }
         
          setList([...newList,editedItem]);


    }
    //display model for edit purpose
    const handleShow = (id) => {
        setShow(true);
        list.map((item) =>{
            if (item.id === id) {
                updateFirstName(item.firstname);
                updateLastName(item.lastname);
                updateAddress(item.address);
                updteEditId(item.id);

                
            }

        });

    }

  

    

    //close add model
    const addHandleClose = () => addItemShow(false);
    //display add model
    const handleAddShow = () => {
        addHandleClose();
        console.log("test add");
       const newAdditonItem={
           id:generateUUID(),
           firstname:firstname,
           lastname:lastname,
           address:address
       }

       setList([...list,newAdditonItem]);



       //generate unique id
       function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }


    }
    

    const handleAdd = () => {
        addItemShow(true);

    }

    const handleItemAdditon=()=>{
        addItemShow(false)
    }



    //delete item
    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    return <div className="wrapper">
         <button type="button" className="btn btn-secondary" onClick={()=>handleAdd()}>Add</button>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {list.map((item)=>(
                <tr key={item.id}>
                <td >{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.address }</td>
                <td><button type="button" className="btn btn-secondary" onClick={()=>handleShow(item.id)}>Edit</button>
                | <button type="button" className="btn btn-danger" onClick={() => handleRemove(item.id)}>Delete</button></td>
                </tr> ))}
                
            </tbody>
        </Table>
        {/* edit model box */}

        <Modal show={editModelShow} onHide={closeEditModel} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="lastname"  value={firstname} onChange={e => updateFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" name="lastname"  value={lastname} onChange={e => updateLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" name="address" value={address} onChange={e => updateAddress(e.target.value)}  required/>
                </Form.Group>
                
            </Form>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={closeEditModel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveEditData}>
                        Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>

{/* Add item */}
        <Modal show={addShow} onHide={addHandleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstname"  onChange={e => updateFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" name="lastname"  onChange={e => updateLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" name="address"  onChange={e => updateAddress(e.target.value)}  required/>
                </Form.Group>
                
            </Form>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={addHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>handleAddShow()}>
                        Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>

    </div>
}

export default Home
