import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);


  return (
    <div>
      <Navbar />
      <Header as="h2" icon="users" content="Reactivites" />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;