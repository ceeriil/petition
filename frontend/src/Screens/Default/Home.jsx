import React from "react";
import { Route, Switch } from "wouter";
import Index from "../../Pages/Index";
import Navbar from "../../Components/Navbar[initial]/Navbar";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import StartPetition from "../../Pages/StartPetition";
import Category from "../../Pages/Category";
import Browse from "../../Pages/Browse";
import PetitionPage from "../../Pages/petitionPage";
import Profile from "../../Pages/Profile";
import Supporters from "../../Pages/Supporters";
import NotFound from "../../Pages/NotFound";
import UnAuth from "../../Pages/UnAuth";

function Home() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/start-a-petition" component={StartPetition} />
        <Route path="/category/:id">
          {(params) => <Category id={params.id} />}
        </Route>
        <Route path="/petitions" component={Browse} />
        <Route path="/p/:id">
          {(params) => <PetitionPage id={params.id} />}
        </Route>
        <Route path="/profile/:id">
          {(params) => <Profile id={params.id} />}
        </Route>
        <Route path="/supporters/:id">
          {(params) => <Supporters id={params.id} />}
        </Route>
        <Route path="/UnAuthorized" component={UnAuth} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Home;
