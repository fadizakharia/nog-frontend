import * as Yup from "yup";
export const signUpSchema = Yup.object().shape({
  characterName: Yup.string()
    .required("character name is required")
    .min(3, "character name must be atleast 3 characters!")
    .max(30, "character name must be at most 30 characters!"),
  password: Yup.string().required("password is required").min(6).max(18),
  confirm: Yup.string()
    .required("password confirmation is required")
    .oneOf([Yup.ref("password"), null], "passwords must match!"),
});
export const signInSchema = Yup.object().shape({
  characterName: Yup.string()
    .required("character name is required")
    .min(3)
    .max(30),
  password: Yup.string().required("password is required").min(6).max(18),
});
