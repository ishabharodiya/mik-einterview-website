// import React from 'react'

const validation = (regdata) => {

    let errors={};

    if(!regdata.email){
        errors.email="email is required."
    }else if (!/\S+@\S+\.]S+/.test(regdata.email)){
        errors.email="Email is invalid."
    }

    if(!regdata.firstname){
        errors.firstname="firstname is required."
    }

    if(!regdata.lastname){
        errors.lastname="lastname is required."
    }

    if(!regdata.companyemail){
        errors.email="email is required."
    }else if (!/\S+@\S+\.]S+/.test(regdata.companyemail)){
        errors.companyemail="Email is invalid."
    }

    return (
        <div>
            
        </div>
    )
}

export default validation;
