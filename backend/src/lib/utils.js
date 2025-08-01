import jwt from "jsonwebtoken";

export const generateToken=(userId,res)=>{
  
  const token =jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"7d"
  });
  
  res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,  //xss attacks se bachata hai
    sameSite:"strict",  //same domain. csrf attacks se bachata hai
    secure: process.env.NODE_ENV!=="development",
  });
  return token;

};
