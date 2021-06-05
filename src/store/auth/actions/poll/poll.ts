import { Dispatch } from "redux";
import { getPolls } from "../../../../api/poll";
import { POLL_ERROR, POLL_GET } from "../../../actions";
import moment from "moment";
import { pollReducerType } from "../../reducers/pollReducer/pollReducerType";
import { poll } from "../../../../common/PollTypes";
interface PollData {
  id: string;
  title: string;
  description?: string;
  type: number;
  pollItems: string[];
  creatorId: {
    characterName: string;
    profilePictureURI: string;
    id: string;
  };
  createdAt: string;
  expirationTime: string;
  loading: boolean;
}
