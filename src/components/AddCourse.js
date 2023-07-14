import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course || Learn Code With Aditya";
    },[]);

    const [course, setCourse] = useState({});

    //Form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }


    //creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id:"", title:"", description:""});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            }
        )
    }






    return(
        <Fragment>
            <h1 className='text-center my-2'>Fill Course Deatils</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e) =>{
                            setCourse({ ...course, id:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        id="title"
                        onChange={(e) =>{
                            setCourse({ ...course, title:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                        type='textarea' 
                        placeholder='Enter description here'
                        id='description'
                        style={{height: 150}}
                        onChange={(e) =>{
                            setCourse({ ...course, description:e.target.value});
                        }}
                    />
                    <Container>
                        <Button color='success'>Add Course</Button>
                        <Button color='warning' type='reset'>Clear</Button>
                    </Container>
                </FormGroup>
            </Form>
        </Fragment>
    )
}

export default AddCourse;