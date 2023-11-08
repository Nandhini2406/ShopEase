export const validateFullName = (fullName) => { 
    const fullNamePattern = /^[a-zA-Z0-9._%+-]/;
    return (fullNamePattern.test(fullName)) 
  };

export const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@gmail\.com$/i;
    return emailPattern.test(email);
  };
  
  export const validatePassword = (password) => {
    const passwordPattern = /^.{6,}$/;
    return passwordPattern.test(password);
  };
  