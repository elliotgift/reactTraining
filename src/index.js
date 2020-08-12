import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img4 from "./images/img4.jpg"


// adding props
const Person = ({img, name, job, children}) => {
  // using templete litrals
    // const url=`https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <article className="person">
{/* <img src={"./images"} alt="a lady"></img> */}
<h4>{name}</h4>
<h4>{job}</h4>
{children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img={22}name="Edinam" job="web developer"><img src={img1} alt="a lady"></img></Person>
          
      <Person img={12} name="Akos" job="Author"><img src={img2} alt="a lady"></img></Person>
      
          
      <Person img={10} name="Gifty" job="Editor">
          <img src={img4} alt="a lady"></img>
        <p>
          Gifty is the Editor at Edinam babes. She is the best at what she does.
        </p>
      </Person>)
      <Person img={22}name="Edinam" job="web developer"><img src={img1} alt="a lady"></img></Person>
          
      <Person img={12} name="Akos" job="Author"><img src={img2} alt="a lady"></img></Person>
               
      <Person img={10} name="Gifty" job="Editor">
              <img src={img4} alt="a lady"></img>
            <p>
              Gifty is the Editor at Edinam babes. She is the best at what she does.
            </p>
          </Person>)
      <Person img={22}name="Edinam" job="web developer"><img src={img1} alt="a lady"></img></Person>
          
      <Person img={12} name="Akos" job="Author"><img src={img2} alt="a lady"></img></Person>
              
      <Person img={10} name="Gifty" job="Editor">
              <img src={img4} alt="a lady"></img>
            <p>
              Gifty is the Editor at Edinam babes. She is the best at what she does.
            </p>
          </Person>);
      
      
      
    
    </section> 
        
 

  
  )};

// now to create a component

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
