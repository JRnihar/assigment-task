import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorElement;
    if (error) {
        errorElement = <h3 className='text-danger'>Error: {error?.message}</h3>
    }

    const navigate = useNavigate()


    if (user) {
        navigate('/trial')
    }

    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
  
        createUserWithEmailAndPassword(data.email, data.password)
    }
    return (
        <section className='sm-vh-100' style={{ backgroundColor: '#0a0e14' }}>
            <div class="container  py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{ borderRadius: '1rem' }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://thumbs.dreamstime.com/b/registration-hand-pressing-button-interface-blue-background-49410297.jpg"
                                        alt="login form" class="img-fluid h-75" style={{ borderRadius: '1rem  0 3rem 1rem ' }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <img style={{ width: '200px' }} src="https://thevouch.digital/wp-content/uploads/2020/10/Group-1-2.png" alt="" />
                                            </div>
                                            <h2 className='text-center' style={{ color: '#00ffc3' }}>Please Sing Up</h2>
                                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', }}>We are a team of designers, developers, and strategists, building elevated products by turning ideas into engaging digital products </h5>

                                            <div class="form-outline mb-4">
                                                <input 
                                                type="email" 
                                                id="form2Example17" 
                                                placeholder='Email address' 
                                                class="form-control form-control-lg"
                                                    {...register("email", {
                                                        required: {
                                                            value: true,
                                                            message: 'Email is Required'
                                                        },
                                                        pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'Provide a valid Email'
                                                        }
                                                    })}

                                                />
                                                <label className="label mt-2">
                                                    {errors.email?.type === 'required' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                                                </label>
                                           
                                                
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    placeholder='Password'
                                                    id="form2Example27"
                                                    class="form-control form-control-lg"

                                                    {...register("password", {
                                                        required: {
                                                            value: true,
                                                            message: 'Password is Required'
                                                        },
                                                        minLength: {
                                                            value: 6,
                                                            message: 'Must be 6 characters or longer'
                                                        }
                                                    })}
                                                />
                                                <label className="label mt-2">
                                                    {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                                                </label>
                                                    
                                                
                                            </div>
                                            {errorElement}
                                            <div class="pt-1 d-grid mb-4">
                                                <button class="btn btn-outline-dark btn-lg " type="submit" value='Sing Up'>Sing Up</button>

                                            </div>


                                            
                                            <Link to='/'><p class="mb-5 pb-lg-2"  >Do have an account? <a href="#!"
                                                style={{ color: '#393f81' }}>Login Here!!!</a></p></Link>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;