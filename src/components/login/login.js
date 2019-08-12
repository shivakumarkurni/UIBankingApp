import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../action/action';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        // axios.get('http://localhost:3001/users?firstName=' + this.state.formData.userName)
        //     .then(resp => {
        //         console.log(resp.data);
        //         if ((this.state.formData.userName === resp.data[0].firstName) && (this.state.formData.password === resp.data[0].mobileNumber)) {
        //             const userDetails = {
        //                 username: resp.data[0].firstName,
        //                 status: resp.data[0].status,
        //                 accNo: resp.data[0].mobileNumber
        //             }

        //             this.props.actions.getloginUser(userDetails);
        //             if (resp.data[0].userType === 'user') {
        //                 toast("Logged in!", {
        //                     position: toast.POSITION.BOTTOM_CENTER
        //                   });
        //                 setTimeout(
        //                     function () {
        //                         this.props.history.push('/fundTransfer')
        //                     }
        //                         .bind(this),
        //                         1500
        //                 );
        //             }

        //             if (resp.data[0].userType === 'admin') {
        //                 toast("Logged in!", {
        //                     position: toast.POSITION.BOTTOM_CENTER
        //                   });
        //                 setTimeout(
        //                     function () {
        //                         this.props.history.push('/manageUser')
        //                     }
        //                         .bind(this),
        //                     1500
        //                 );
        //             }
        //         }
        //     });


        const { formData } = this.state;
        const global=this; 
        axios.post('http://10.117.86.226:9090/register/save',this.state.formData).then((response)=>{
            console.log(response);
            this.props.history.push('/home');
           
        }).catch((error)=>{ 
        });
      
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Sign in to Internet Banking</h1>
                        <div className="account-wall">
                           
                            <form className="form-signin">
                                <input type="text" name="userName" className="form-control" placeholder="Username" onChange={this.handleChange} required autoFocus />
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="Password" required />
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Sign in</button>
                            </form>
                        </div>
                        <Link className="nav-item nav-link" to='/register'>Request for an account</Link>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Login);

