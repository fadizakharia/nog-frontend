import * as Yup from "yup";
export const editProfileSchema = Yup.object().shape({
  characterName: Yup.string()
    .notRequired()
    .min(3, "character name must be atleast 3 characters!")
    .max(30, "character name must be at most 30 characters!"),
  Bio: Yup.string().notRequired().min(5),
});
