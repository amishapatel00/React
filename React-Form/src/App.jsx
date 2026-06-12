
import './App.css';
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();
   async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000)); 
    console.log("submitting the form",data);  
  }
  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>FirstName</label>
        <input
        className={errors.firstname?'input-error':""}
         {...register("firstname", { required: true,
         minLength:{value:2,message:"min len 2"},
         maxLength:{value:10,message:"max len 10"} })}/>
         {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}
      </div>
      
      <br/>
      <div>
        <label>MiddleName</label>
        <input 
        className={errors.middlename?'input-error':""}
        {...register("middlename",
         { required:true, 
           minLength:{value:2,message:"min len 2"},
           maxLength:{value:10,message:"max len 10"}})}/>
           {errors.middlename && <p>{errors.middlename.message}</p>}
      </div>
           <br/>
      <div>
        <label>LastName</label>
        <input 
        className={errors.lastname?'input-error':""}
        {...register("lastname", { required: true ,
         minLength:{value:2,message:"min len 2"},
           maxLength:{value:10,message:"max len 10"}}
        )}/>
        {errors.lastname && <p>{errors.lastname.message}</p>} 
      </div>
      <br/>
       <button type="submit" disabled={isSubmitting} style={{ display: "block", marginTop: "10px" }}>
        {isSubmitting ? "Submitting..." : "Submit Form"}
       
      </button>
     </form>
    </>
  )
}

export default App
