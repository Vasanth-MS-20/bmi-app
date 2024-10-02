import React from 'react'
import { RiAlertFill } from "react-icons/ri";

const Content = ({
    BMI,
    status,
    toggle,
    img,
    setBMI,
    setStatus,
    setToggle
}) => {
    
  function handleSubmit(e){
    let height = document.forms[0].elements[0].value
    let weight = document.forms[0].elements[1].value

    if(e.type === 'click' || e.key === 'Enter'){
      if(height && weight){
        if(!isNaN(height) && !isNaN(weight)){
          let calculateBMI = Math.floor(weight / (height * 0.01)**2)
          setBMI(calculateBMI)
          if(calculateBMI <= 18.4){
            setStatus('Underweight')
          }else if(calculateBMI >= 18.5 && calculateBMI <= 24.0){
            setStatus('Normal')
          }else if(calculateBMI >= 25.0 && calculateBMI <= 39.9){
            setStatus('Overweight')
          }else if(calculateBMI >= 40.0){
            setStatus('Obese')
          }else{
            setStatus('Invalid Input')
          }
        }
      }else{
        setToggle(true)
      }
    }
  }

  function handleClear(){
    let myForm = document.forms[0]
    myForm.reset()

    setBMI('')
    setStatus('')
    setToggle(false)
  }

  return (
    <>
        <div className="row mt-3">
        <div className="col-sm-6 mx-auto">
          <div className="card w-100 border" data-bs-theme='dark'>
            <div className="row align-items-center">

              <div className="col-sm-6 d-none d-sm-block mb-4">
                <img src={img} className='img-fluid' alt="" />
              </div>

              <div className="col-sm-6 mb-4">
                <div className="display-6 mb-4 text-primary">BMI Calculator</div>
                {toggle && <div className="alert alert-danger p-1 me-2"> <RiAlertFill /> Please enter valid numeric values for height and weight</div>}

                <form action="" className='pe-3'>
                  <label htmlFor="h" className="form-label ms-2 ms-md-0">Height (cm):*</label>
                  <input type="text" id='h' className="form-control mb-3 ms-2 ms-md-0" />
                  <label htmlFor="w" className="form-label ms-2 ms-md-0">Weight (kg):*</label>
                  <input type="text" id='w' className="form-control mb-3 ms-2 ms-md-0" onKeyDown={handleSubmit} />
                </form>

                <button className="btn btn-success col-12 p-0 p-2 col-sm-5" onClick={handleSubmit} >Calculate BMI</button>
                <button className="btn btn-danger p-2 col-12 col-sm-3 ms-sm-3 mt-3 mt-sm-0" onClick={handleClear}>Clear</button>

                {(!toggle && BMI) && <div className="card mt-3 border ms-2 ms-md-0 me-2 mb-0">
                  <div className="card-body">
                    <div className="card-title h5">Your BMI is <b className='text-danger'>{BMI}</b></div>
                    <div className="card-text h6">status : <b className='text-primary'>{status}</b></div>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content