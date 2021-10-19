import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const AddMovie = ({ show, handleClose, addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title:"",
        year:"",
        type:"",
        urlPoster:"",
        description:"",
        rate:"1"
    })
    const onStarClick=(nextValue, prevValue, name)=> {
        setNewMovie({...newMovie,rate:nextValue});
    }

    const handleChange=(e)=>{
        setNewMovie({...newMovie, [e.target.name]:e.target.value})
    }
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <label>Add new movie</label>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-box">
            <form onSubmit="h">
              <label>Title:</label>
              <input className="input-box" type="text" name="title" onChange={handleChange}/>
              <span className="inputValue">title</span>
              <label>Year</label>
              <input className="input-box" type="text" name="year" onChange={handleChange}/>
              <span className="inputValue">year</span>
              <label>Type</label>
              <input className="input-box" type="text" name="type" onChange={handleChange}/>
              <span className="inputValue">type</span>
              <label>Poster</label>
              <input className="input-box " name="urlPoster" onChange={handleChange}/>
              <span className="inputValue">urlPoster</span>
              <label>Description</label>
              <textarea rows="5" className="input-box desc" name="description" onChange={handleChange}/>
              <span className="inputValue">description</span>
              <label>Rating</label>
              <span className="rating-choice">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={newMovie.rate}
                  onStarClick={onStarClick}
                />
              </span>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
          <button className="submit-button" onClick={()=> {addMovie(newMovie);handleClose()}}>Add</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
