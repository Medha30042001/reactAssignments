import React, { useReducer } from 'react'

const initialState = {
    step: 1,
    form:{
        name:"",
        email:"",
        username:"",
        password:""
    },    
    isSubmitted:false
}

const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE_FIELD":
            return{
                ...state,
                form:{
                    ...state.form,
                    [action.field]:action.value
                }
            };
        case "NEXT_STEP":
            return{
                ...state,
                step: state.step + 1
            };
        case "PREVIOUS_STEP":
            return{
                ...state,
                step: state.step - 1
            }
        case "SUBMIT_FORM":
            return{
                ...state,
                isSubmitted: true
            };
        case "RESET_FORM" : 
            return initialState;
        default:
            return state;
    }
}

const Home = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {step, form, isSubmitted} = state;

    if(isSubmitted){
        return (
            <div className='form'>
                <h2>Form Submitted</h2>
                <button onClick={() => dispatch({type:"RESET_FORM"})}>
                    Reset</button>
            </div>
        )
    }

  return (
    <>

        <h1>Step {step} of 3</h1>

        {step === 1 && (
            <div className='form'>
                <h2>Personal Details</h2>

                <input type="text"
                placeholder='Enter Name'
                value={form.name}
                onChange={(e) => 
                    dispatch({
                        type:"UPDATE_FIELD",
                        field : "name",
                        value: e.target.value
                    })
                } />

                <input type="email"
                placeholder='Enter Email'
                value={form.email}
                onChange={(e) => 
                    dispatch({
                        type:"UPDATE_FIELD",
                        field: "email",
                        value:e.target.value
                    })
                } />

                <button onClick={() => 
                    dispatch({type:"NEXT_STEP"})}>
                        Next</button>
            </div>
        )}

        {step === 2 && (
            <div className='form'> 
                <h2>Account Details</h2>

                <input type="text"
                placeholder='Enter Username'
                value={form.username}
                onChange={(e) => 
                    dispatch({
                        type:"UPDATE_FIELD",
                        field: "username",
                        value:e.target.value
                    })
                } />

                <input type="password"
                placeholder='Enter Password'
                value={form.password}
                onChange={(e) => 
                    dispatch({
                        type:"UPDATE_FIELD",
                        field: "password",
                        value:e.target.value
                    })
                } />

                <button onClick={() => 
                    dispatch({type: "PREVIOUS_STEP"})}>
                        Back</button>

                <button onClick={() => 
                    dispatch({type: "NEXT_STEP"})}>
                        Next</button>
            </div>
            )}

            {step === 3 && (
                <div className='form'>
                    <h2>Review</h2>
                    <h3>Name: {form.name}</h3>
                    <h3>Email: {form.email}</h3>
                    <h3>Username: {form.username}</h3>

                    <button onClick={() => dispatch({type:"PREVIOUS_STEP"})}>
                        Back</button>

                    <button onClick={() => 
                        dispatch({type: "SUBMIT_FORM"})
                    }>Submit</button>
                </div>
            )}
    </>
  )
}

export default Home