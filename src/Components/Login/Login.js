import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <section className='sm-vh-100' style={{ backgroundColor: '#0a0e14' }}>
            <div class="container  py-5">
                <div class="row d-flex justify-content-center align-items-center ">
                    <div class="col col-xl-10">
                        <div class="card" style={{ borderRadius: '1rem' }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" class="img-fluid" style={{ borderRadius: '1rem  0 3rem 1rem ' }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <img style={{ width: '200px' }} src="https://thevouch.digital/wp-content/uploads/2020/10/Group-1-2.png" alt="" />
                                            </div>
                                            <h2 className='text-center' style={{ color: '#00ffc3' }}>Please Login</h2>
                                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', }}>We are a team of designers, developers, and strategists, building elevated products by turning ideas into engaging digital products</h5>

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

                                            <div class="pt-1 d-grid mb-4">
                                                <button class="btn btn-outline-dark btn-lg " value='LogIn' type="submit">LogIn</button>

                                            </div>


                                            <a class="small text-muted" href="#!">Forgot password?</a>
                                            <Link to='/register'> <p class="mb-5 pb-lg-2"  >Don't have an account? <a href="#!"
                                                style={{ color: '#393f81' }}>Register here</a></p></Link>
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

export default Login;