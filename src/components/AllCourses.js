import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi"
import axios from "axios"
import { toast } from 'react-toastify';

const AllCourses=()=>{

    useEffect(()=>
      {
        document.title="All Courses || Learn Code With Aditya"
      },[]);

    //functions to call server to fetch db data
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/`).then(
            (response)=>{
            //success
            console.log(response.data);
            toast.success("cources has been loading",{
                position:"bottom-center"
            });

            setCourses(response.data);
        }, 
        (error)=>{
            //error
            console.log(error);
            toast.error("something went wrong",{
                position:"bottom-center"
            });
        });
    };

    //loading server data
    useEffect(()=>
    {
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses]= useState([]);

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }

    return (
        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of All Courses</p>

            {
                courses.length > 0 ? courses.map(item => <Course key={item.id} course={item} update={updateCourse}/>) : "No Course Available"
            }
        </div>
    )

}

export default AllCourses;