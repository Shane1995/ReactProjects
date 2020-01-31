import React, { useState } from "react";
import ResourceList from "./ResourceList";
import Users from "./Users";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <Users />
      <div>
        <button
          onClick={() => {
            setResource("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResource("todos");
          }}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
