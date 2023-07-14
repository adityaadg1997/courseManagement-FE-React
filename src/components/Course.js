import axios from 'axios';
import React from 'react';
import {
    Card,
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    CardFooter, 
    Button, 
    Container
} from 'reactstrap';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Course=({course, update})=>{

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/${id}`).then(
      (response)=>{
        toast.success("course deleted");
        update();
      },
      (error)=>{
        toast.error("Internal Server Error");
      }
    )

  }

    return (
      
          <Card className='text-center'>
            <CardBody>
            <CardTitle><h3>{course.title}</h3></CardTitle>
              <CardText>{course.description}</CardText>
              <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                      deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color='warning'>Update</Button>
              </Container>
            </CardBody>
          </Card>
      
      );
}

export default Course;