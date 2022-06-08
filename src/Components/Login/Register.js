import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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

                                        <form>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <img style={{ width: '200px' }} src="https://vouchdigital.africa/wp-content/uploads/2021/02/cropped-positive.png.webp" alt="" />
                                            </div>
                                            <h2 className='text-center' style={{ color: '#00ffc3' }}>Please Sing Up</h2>
                                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', }}>Vouch provides a customizable digital platform for voucher management of all types. </h5>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="form2Example17" class="form-control form-control-lg" />
                                                <label class="form-label" for="form2Example17">Email address</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="password" id="form2Example27" class="form-control form-control-lg" />
                                                <label class="form-label" for="form2Example27">Password</label>
                                            </div>

                                            <div class="pt-1 d-grid mb-4">
                                                <button class="btn btn-outline-dark btn-lg " type="button">Sing Up</button>

                                            </div>


                                            <a class="small text-muted" href="#!">Forgot password?</a>
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