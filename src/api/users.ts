import axiosInstance from "./axiosInstance";

export const getUsers = async (limit = 10, page = 0) => {
  try {
    const result = await axiosInstance.post("/user/users", { limit, page });
    return result;
  } catch (err) {
    return err;
  }
};
export const getUser = async (characterName: string) => {
  try {
    const result = await axiosInstance.get(`/user/${characterName}`);
    return result;
  } catch (err) {
    return err;
  }
};
export const updateUserForm = async (
  characterName?: string | null,
  Bio?: string | null,
  profilePicture?: File | null
) => {
  const formData = new FormData();
  console.log(characterName, Bio, profilePicture);

  let result: any;
  if (characterName) {
    formData.append("characterName", characterName);
  }
  if (Bio) {
    formData.append("bio", Bio);
  }
  if (profilePicture) {
    formData.append("profilePicture", profilePicture);
  }
  if (formData.values.length > -1) {
    try {
      result = await axiosInstance.put("/user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      return err;
    }
  }
  if (!result) return;
  return result;
};
