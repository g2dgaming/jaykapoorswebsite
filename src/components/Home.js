import React from "react";
import JayJ from "../img/JayJ.png"
import style from "./Home.module.css"
import Jays_Mobile from "../img/Jays_Mobile.png"
import "../App.css"




function Home() {
  return (
      <div className="container-fluid">
      <div className="row " >
      <div className="col-12 padding" style={{paddingLeft:"0px !important"}}>
          <img src={Jays_Mobile} alt="Jays" className={style.img_mobile}></img>
        </div>
        
        <div className="col-12 col-md-6 margin">
          <h1 className="fw-bold py-2 display-4">Jay's Jumble</h1>
          <div className="fs-5">
          <p >The most useful newsletter on Internet 🧠</p>
          <p>Bringing you the best of what the internet has to offer, weekly in
            your inbox!📩</p>
          </div>

         <div className="py-0">
         <h4 className="fw-bold fs-2">What to Expect?</h4>
          <ul className="fs-5">
            <li>5 Tech Tools</li>
            <li>A Finance Tip</li>
            <li>A Productivity Hack</li>
            <li>Recommendations</li>
            <li>A question of the Week</li>
            <li>And the unexpected 😉</li>
          </ul>
         </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="form-group mb-4 w-75">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control w-100"
            />
          </div>

         <div className="gap-5 w-75">

         
          <button
            className="btn rounded-pill text-light w-100"
            style={{ backgroundColor: "black"}}
      
          >
            Subscribe
          </button>
           
        
          <div className="mt-1 w-100 d-flex align-items-center justify-content-center">
         <a href="https://twitter.com/Jaykapoor24?s=09" style={{color:"black"}}  className="mx-3">
              <i className="fab fa-twitter h2" ></i>
            </a>
         <a href="https://instagram.com/jaykapoor.24?utm_medium=copy_link" style={{color:"black"}} className="mx-3">
              <i className="fab fa-instagram h2"></i>
            </a>
         <a href="https://youtube.com/c/JayKapoor24" style={{color:"black"}}  className="mx-3" >
              <i className="fab fa-youtube h2"></i>
            </a>
         </div>
        
         <a href="https://jaykapoor24.substack.com/">
         <button
            className="btn rounded-pill text-light mb-5 w-100"
            style={{ backgroundColor: "orange"}}
          >
            Read old Articles
          </button>
          </a>
         </div>
         </div>
        </div>
        
        {/* <div className="col-12 col-md-1"></div> */}
        <div className="col-12 col-md-4 w-50 d-flex justify-content-end px-0">
          <img src={JayJ} alt="Jays" className={style.img}></img>
        </div>
      </div>
    </div>
  );
} 

export default Home;
