const yup = require("yup");

const newUserSchema = yup.object().shape({
  rut: yup.string().required(),
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  phone: yup.number().required(),
  password: yup.string().required().min(6),
  idRole: yup.number().required(),
  idType: yup.number().required(),
  active: yup.boolean().required()

});

module.exports = { newUserSchema };