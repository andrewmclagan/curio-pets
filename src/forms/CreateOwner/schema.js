import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("must have name"),
  age: Yup.number().min(1).max(160).required("Must have age"),
  gender: Yup.string().oneOf(["female", "male"]).required("must have gender")
});
