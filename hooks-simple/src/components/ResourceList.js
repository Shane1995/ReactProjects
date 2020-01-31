import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  // Using two functions
  //   const fetchResource = async resource => {
  //     const response = await Axios.get(
  //       `http://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResources(response.data);
  //   };
  // works
  //   useEffect(() => {
  //     fetchResource(resource);
  //   }, [resource]);

  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(report => (
        <li key={report.id}>{report.title} </li>
      ))}
    </ul>
  );
};

export default ResourceList;
