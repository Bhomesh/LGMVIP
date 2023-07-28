import React, {useEffect, useState} from "react"

export default function Form({formData,handleChange,handleSkills,handleSubmit,clear}){
    
    

    return(
        <form className="enrollForm">
            <h1>Student Enrollment System</h1>
            <label>Name :<span>llllllllll</span><input type="text" name="name" value={formData.name} onChange={handleChange}/></label><br/>
            <label>Email :<span>lllllllllll</span><input type="email" name="email" value={formData.email} onChange={handleChange}/></label><br/>
            <label>Website :<span>llllll</span><input type="text" name="website" value={formData.website}onChange={handleChange}/></label><br/>
                <label>Phone number: <input type="text" name = "Pnumber" value={formData.Pnumber}onChange={handleChange}/></label><br/>
            <label>Gender : 
                <input type="radio" name="gender" onChange={handleChange} value="Male"/><label>Male</label>
                <input type="radio" name="gender" onChange={handleChange} value="Female"/><label>Female</label>
            </label><br/>
            <label>Skills : 
                <input type="checkbox" name="skills" onChange={handleSkills} value="DevOps" className="skills"/><label>DevOps</label>
                <input type="checkbox" name="skills" onChange={handleSkills} value="kubernetes" className="skills"/><label>Kubernetes</label>
                <input type="checkbox" name="skills" onChange={handleSkills} value="Docker" className="skills"/><label>Docker</label>
            </label><br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="submit" onClick={clear} className="clear">Clear</button>

        </form>
    )
}