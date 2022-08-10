import { combineReducers } from "redux";
import loginReducer from "./Login/reducer";
import editProfileReducer from "./EditProfile/reducer";
import petitionCreateReducer from "./Petition/reducer";
import postReducer from "./Post/reducer";
import profileReducer from "./Profile/reducer";
import detailsReducer from "./Single/reducer";
import commentReducer from "./Comment/reducer";
import allReducer from "./All/reducer";
import discoverReducer from "./Discover/reducer";
import editPetitionReducer from "./EditPetition/reducer";
import signedPetitionReducer from "./Signed/reducer";
import declareReducer from "./Declare/reducer";
import categoryReducer from "./Category/reducer";
import supporterReducer from './Supporters/reducer';
import registerReducer from './Register/reducer';

export default combineReducers({
  login: loginReducer,
  editProfile: editProfileReducer,
  create: petitionCreateReducer,
  started: postReducer,
  profile: profileReducer,
  declare: declareReducer,
  details: detailsReducer,
  comment: commentReducer,
  all: allReducer,
  discover: discoverReducer,
  editPetition: editPetitionReducer,
  signed: signedPetitionReducer,
  category: categoryReducer,
  supporters: supporterReducer,
  register:registerReducer,
});
