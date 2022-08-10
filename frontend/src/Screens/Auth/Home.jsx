import React from "react";
import { Route, Switch } from "wouter";
import Index from "../../Pages/Index";
import Navbar from "../../Components/Navbar[Auth]/Navbar";
import StartPetition from "../../Pages/StartPetition";
import PetitionForm from "../../Pages/petitionForm";
import Category from "../../Pages/Category";
import Browse from "../../Pages/Browse";
import Profile from "../../Pages/Profile";
import UpdateProfile from "../../Pages/UpdateProfile";
import PetitionPage from "../../Pages/petitionPage";
import Supporters from "../../Pages/Supporters";
import NotFound from "../../Pages/NotFound";
import UnAuth from '../../Pages/UnAuth'

function Home() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/start-a-petition" component={StartPetition} />
        <Route path="/start-a-petition/:id">
          {(params) => <PetitionForm id={params.id} />}
        </Route>
        <Route path="/category/:id">
          {(params) => <Category id={params.id} />}
        </Route>
        <Route path="/petitions" component={Browse} />
        <Route path="/profile/:id">
          {(params) => <Profile id={params.id} />}
        </Route>
        <Route path="/me/edit" component={UpdateProfile} />
        <Route path="/p/:id">
          {(params) => <PetitionPage id={params.id} />}
        </Route>
        <Route path="/supporters/:id">
          {(params) => <Supporters id={params.id} />}
        </Route>
        <Route path="/UnAuthorized" component={UnAuth}/>
        <Route path='/:rest*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default Home;
