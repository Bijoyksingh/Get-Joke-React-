import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData]= useState({
        username:"",
        remarks:"",
        rating:"5",
    });

    let inputHnadler=(event)=>{
        setFormData((currData)=>{
            return{...currData, [event.target.name]:[event.target.value]}
        });
    };
     let handleSumit=(event)=>{
setFormData({
    username:"",
        remarks:"",
        rating:"5",
})
event.preventDefault();
console.log(formData);
     }
  return (
    <div>
      <h3>Give us a comment</h3>
      <form onSubmit={handleSumit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={inputHnadler}
        />
        <br /><br />
        <label htmlFor="remarks">Comment : </label>
        <textarea
          type="text"
          name="remarks"
          id="remarks"
          placeholder="Enter Comment"
          value={formData.remarks}
          onChange={inputHnadler}></textarea>
        
        <br /><br />
        <label htmlFor="rating">Rating(1-5) : </label>
        <input type="number" name="rating" id="rating" min={1} max={5}value={formData.rating}
        onChange={inputHnadler} />
        <br /><br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
