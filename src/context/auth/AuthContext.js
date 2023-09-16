import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const AuthContext = React.createContext();

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

const AuthProvider = ({children}) => {
  const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')) : null);
  const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exam, setExam] = useState('JSSCE');
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [ isLoading, setIsLoading] = useState(true);

  const initialFormData = Object.freeze({
      username: '',
      email: '',
      password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const baseURL = 'http://ictcds.pythonanywhere.com/api/'

  const navigate = useNavigate()

  const handleChange = (e) =>{
    updateFormData({
      ...formData,
      //Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  // ** Fetches Users
  var userEmail = [];

  useEffect(()=>{
    getUsers();
  }, [])

  const customRedirect = ()=>{
    setLoading(false);
    toast.success("Welcome Back!!", toastPosition);
    setLoginOpen(false);
    navigate(`/dashboard`);
  }

  let getUsers = async() =>{
    let response = await fetch(`${baseURL}accounts/user-list/`, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });
    let data = await response.json()
    if (response.status === 200){
      setUsers(data)
      console.log(data)
    }
    else {
      console.log(response.statusText)
    }
  };

  users.forEach((item)=>{
    userEmail.push(item.email);
  })
  // **End User List

  // **Get Student Emails
  const studentEmail = [];
  let emails = users.filter(item => item.is_student_account === true);
  emails.forEach((item)=>{
    studentEmail.push(item.email)
  })
  // **End Student Emails


  // ** UserSignUp
  const signUp = async(e) =>{
    setLoading(true);
    const {email, username, password} = formData;
    e.preventDefault()
    if (userEmail.includes(email)){
      setLoading(false);
      toast.error("Email already exists", toastPosition)
    }else if (password.length < 8){
      setLoading(false);
      toast.error("Password must have 8 characters", toastPosition)
    } else {
        let response = await fetch(`${baseURL}accounts/student-register/`, {
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            'email': email,
            'username': username,
            'password': password,
            'exam': exam,
          })
        })
        let data = await response.json()

        if (response.status === 201){
          console.log(data)
          let res = await fetch(`${baseURL}token/`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({'email': email, 'password': password})
          })

          let res_data = await res.json()

          if (res.status === 200){
            setAuthTokens(res_data);
            setUser(jwt_decode(res_data.access));
            localStorage.setItem('authTokens', JSON.stringify(res_data));
            setLoading(false);
            toast.success("Account created successfully !!", toastPosition);
            setSignUpOpen(false);
            navigate(`/dashboard`);
          } else{
            console.log(res.statusText)
            setLoading(false);
            toast.error('Oops!! Something went wrong', toastPosition);
            setSignUpOpen(false);
            setLoginOpen(true);
          }
        } else {
          console.log(response.statusText);
          setLoading(false);
          toast.error('Oops!! Something went wrong', toastPosition);
        }
    }

  }
  // ** EndUserSignUp

  // **User Login
  const login = async (e) =>{
    setLoading(true)
    e.preventDefault()
    if (studentEmail.includes(e.target.email.value)){
      let response = await fetch(`${baseURL}token/`, {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
      })
      let data = await response.json()

      if (response.status === 200){
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
        setTimeout(()=>{
          customRedirect();
        }, 2000);
      } else{
        setLoading(false)
        toast.error("Invalid Credentials", toastPosition)
      }

    }else{
      setLoading(false)
      toast.error("Invalid Credentials", toastPosition)
    }
  }
  // ** End User Login

  // **USER LOGOUT
  const logout = async () =>{
    let response = await fetch(`${baseURL}accounts/logout/blacklist/`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({refresh_token: authTokens.refresh})
    });
    console.log(response.statusText)
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    toast.warn("You've been logged out", toastPosition)
    navigate('/')
  }
  // **END USER LOGOUT

  // To handle reload
  useEffect(()=>{
    if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setIsLoading(false)
  }, [authTokens, isLoading])

  return (
    <AuthContext.Provider
    value={{
      // **AUTH MODAL
      signUpOpen,
      loginOpen,
      setSignUpOpen,
      setLoginOpen,
      // ** AUTH / USER
      user,
      authTokens,
      // **FUNCTION
      signUp,
      login,
      logout,
      handleChange,
      // ** UPDATE
      setExam,
      // **LOADING
      loading
    }}
    >
    {isLoading ? null: children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () =>{
  return useContext(AuthContext)
}

export {AuthContext, AuthProvider}