export const validateData=(email,password,fullName)=>{
    const isFullName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Please Enter a valid password";
    if(!isFullName) return "Please Enter a valid Name";
    return null;
}