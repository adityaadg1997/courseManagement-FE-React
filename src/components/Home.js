import React, { useEffect } from "react";
import { Button } from 'reactstrap';

const Home = () =>{
    
    useEffect(()=>{
        document.title="Home"
    },[]);

    return(
        <div className="container-fluid bg-light text-dark p-5 text-center">
            <div className="container bg-light p-5">
                <h1 >Learn Code With Aditya</h1>
                <p>Go to My Website</p>

                <Button color="primary" outline>Start Using</Button>
            </div>
      </div>
    );
}

export default Home;