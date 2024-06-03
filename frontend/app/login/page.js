'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { permanentRedirect } from 'next/navigation';

export default function Login() {
    const [flatTabs, setFlatTabs] = useState(1)
    const handleFlatTabs = (index) => {
        setFlatTabs(index)
    }

    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('accessToken', 'accessToken')
        loginform.submit() 
    }

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Login">
                <div>
                    <section className="register login">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h3 className="heading">Login</h3>
                                        <p className="desc fs-20">
                                            Welcome back! Log In now to start trading
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="flat-tabs">
                                        <ul className="menu-tab">
                                            <li className={flatTabs === 1 ? "active" : ""} onClick={() => handleFlatTabs(1)}><h6 className="fs-16">Email</h6></li>
                                            <li className={flatTabs === 2 ? "active" : ""} onClick={() => handleFlatTabs(2)}><h6 className="fs-16">Mobile</h6></li>
                                        </ul>
                                        <div className="content-tab">
                                            <div className="content-inner" style={{ display: `${flatTabs === 1 ? "block" : "none"}` }}>
                                                <form action="/" name="loginform">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email/ID</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Please fill in the email form." />
                                                    </div>
                                                    <div className="form-group s1">
                                                        <label>Password </label>
                                                        <input type="password" className="form-control" placeholder="Please enter a password." />
                                                    </div>
                                                    <div className="form-group form-check">
                                                        <div>
                                                            <input type="checkbox" className="form-check-input" />
                                                            <label className="form-check-label">Remember Me</label>
                                                        </div>
                                                        <p>Forgot Password?</p>
                                                    </div>
                                                    <button onClick={(e) => login(e)} className="btn-action">Login</button>
                                                    <div className="bottom">
                                                        <p>Not a member?</p>
                                                        <Link href="/register">Register</Link>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                            <div className="content-inner" style={{ display: `${flatTabs === 2 ? "block" : "none"}` }}>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Mobile Phone</label>
                                                        <div>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option>+1</option>
                                                                <option>+84</option>
                                                                <option>+82</option>
                                                                <option>+32</option>
                                                            </select>
                                                            <input type="text" className="form-control" placeholder="Your Phone number" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group s1">
                                                        <label>Password </label>
                                                        <input type="password" className="form-control" placeholder="Please enter a password." />
                                                    </div>
                                                    <div className="form-group form-check">
                                                        <div>
                                                            <input type="checkbox" className="form-check-input" />
                                                            <label className="form-check-label">Remember Me</label>
                                                        </div>
                                                        <p>Forgot Password?</p>
                                                    </div>
                                                    <button type="submit" className="btn-action">Login</button>
                                                    <div className="bottom">
                                                        <p>Not a member?</p>
                                                        <Link href="/register">Register</Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="qr-code center">
                                        <img src="/assets/images/icon/qrcode.png" alt="" />
                                        <h6 className="fs-20">Login with QR code</h6>
                                        <p className="fs-14">
                                            Scan this code with the <span>Rockie mobile app</span> <br />
                                            to log in instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}