import Layout from '../components/Layout';
import {useState} from 'react';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register',
  });

  // eslint-disable-next-line no-unused-vars
  const {name, email, password, error, success, buttonText} = state;


  // e => {// setState({ ...state, [e.target.name]: e.target.value });
  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: '',
      success: '',
      buttonText: 'Register',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({name, email, password});
    /* setState({ ...state, buttonText: 'Submitting' });
      setTimeout(() => {
        setState({ ...state, buttonText: 'Register' });
      }, 3000);*/
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" >Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          onChange={handleChange('name')}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={handleChange('email')}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Pasword"
          onChange={handleChange('password')}
          value={password}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning" >{buttonText}</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
        { registerForm() }
        <br />
        { JSON.stringify(state) }
      </div>
    </Layout>
  );
};

export default Register;
