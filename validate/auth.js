const joi = require("joi");
const registerSchema = joi.object({
    userName: joi.string()
    .min(3)
    .max(30)
    .required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(6).max(12),
  })
  
  const loginSchema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });
  
  module.exports = {registerSchema , loginSchema}