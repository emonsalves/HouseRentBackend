const yup = require("yup");

const newUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  rol: yup.string().required(),
  lenguaje: yup.string().required(),
});

module.exports = { newUserSchema };