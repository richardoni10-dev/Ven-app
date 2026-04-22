import React, { useState } from 'react';

const EmailStep = ({ email, setEmail, setPage }) => (
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'40px 24px',fontFamily:'system-ui,sans-serif',maxWidth:400,margin:'0 auto'}}>
    <span style={{fontSize:40,fontWeight:800,color:'#008CFF',fontStyle:'italic',marginBottom:40}}>venmo</span>
    <h1 style={{fontSize:28,fontWeight:500,marginBottom:40}}>Log in</h1>

    <input 
      type="text" 
      placeholder="Enter email, mobile, or username" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      style={{width:'100%',padding:16,fontSize:16,border:'1px solid #ccc',borderRadius:8,marginBottom:24,outline:'none'}}
    />

    <button 
      onClick={()=>{
        if (!email.trim()) {
          alert("Please enter your email");
          return;
        }
        setPage('password');
      }}
      style={{width:'100%',padding:16,fontSize:16,fontWeight:600,color:'#fff',background:'#008CFF',border:'none',borderRadius:30,cursor:'pointer',marginBottom:16}}
    >
      Next
    </button>

    <button style={{width:'100%',padding:16,fontSize:16,fontWeight:600,color:'#008CFF',background:'transparent',border:'2px solid #008CFF',borderRadius:30,cursor:'pointer'}}>
      Sign up
    </button>
  </div>
);

const PasswordStep = ({ email, setPage, showPassword, setShowPassword, password, setPassword }) => (
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'40px 24px',fontFamily:'system-ui,roboto',maxWidth:400,margin:'0 auto'}}>
    <span style={{fontSize:40,fontWeight:800,color:'#008CFF',fontStyle:'italic',marginBottom:40}}>venmo</span>
    <h1 style={{fontSize:28,fontWeight:500,marginBottom:40}}>Log in</h1>
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16,marginBottom:32,width:'100%'}}>
      <span style={{fontSize:18,color:'#333'}}>{email}</span>
      <button 
        onClick={()=>setPage('login')}
        style={{color:'#008CFF',background:'none',border:'none',fontSize:16,cursor:'pointer'}}
      >
        Change
      </button>
    </div>

    <div style={{width:'100%',display:'flex',marginBottom:16}}>
      <input 
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{flex:1,padding:16,fontSize:16,border:'1px solid #ccc',borderRight:'none',borderRadius:'8px 0 0 8px',outline:'none'}}
      />
      <button 
        onClick={()=>setShowPassword(!showPassword)}
        style={{padding:'0 16px',border:'1px solid #ccc',borderRadius:'0 8px 8px 0',background:'#fff',cursor:'pointer',fontSize:14}}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>

    <a href="#" style={{color:'#008CFF',textDecoration:'none',fontSize:16,alignSelf:'flex-start',marginBottom:24}}>
      Forgot password?
    </a>
  {/* loginbutton */}
   <button 
  onClick={() => window.open("https://www.ctvnews.ca/local/", "_blank")}
  style={{width:'100%',padding:16,fontSize:16,fontWeight:600,color:'#fff',background:'#008CFF',border:'none',borderRadius:30,cursor:'pointer',marginBottom:16}}
>
  Log in
</button>

    <button style={{width:'100%',padding:16,fontSize:16,fontWeight:600,color:'#008CFF',background:'transparent',border:'2px solid #008CFF',borderRadius:30,cursor:'pointer'}}>
      Sign up
    </button>
  </div>
);

const Appi = () => {
  const [page, setPage] = useState('login'); // starts on login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {page === 'login' && (
        <EmailStep 
          email={email} 
          setEmail={setEmail} 
          setPage={setPage}
        />
      )}

      {page === 'password' && (
        <PasswordStep 
          email={email} 
          setPage={setPage} 
          showPassword={showPassword} 
          setShowPassword={setShowPassword}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

export default Appi;