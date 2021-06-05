import { poll } from "../common/PollTypes";
import axiosInstance from "./axiosInstance";

const getPolls = async (expiredOnBefore: moment.Moment) => {
  try {
    const result = await axiosInstance.get(
      `/poll/${expiredOnBefore.valueOf()}`
    );

    return result;
  } catch (err) {
    return err;
  }
};
const createPoll = async (pollData: poll) => {};
export { getPolls, createPoll };
