import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({loggedInUser}) => (<h1 className="text-2xl font-bold">{loggedInUser}</h1>)}
        </UserContext.Consumer>
        <h2>This is Namste React Web Series</h2>
        {/* <User name={"Anand (Function)"} /> */}
        <UserClass name={"Frist"} location={"Hyderabad (Class)"} />
        {/* <UserClass name={"Second"} location={"Hyderabad (Class)"} />
        <UserClass name={"Three"} location={"Hyderabad (Class)"} /> */}
      </div>
    );
  }
}

export default About;

/**
 * - Parent Constructor
 * - Parent Render
 *    - FirstChild Constructor
 *    - FirstChild Render
 *    - FirstChild ComponentDidMount
 *    - SecondChild Constructor
 *    - SecondChild Render
 *    - SecondChild ComponentDidMount
 * - Parent ComponentDidMount
 *
 * But it not process. Actually
 * - Parent Constructor
 * - Parent Render
 *    - FirstChild Constructor
 *    - FirstChild Render
 *    - SecondChild Constructor
 *    - SecondChild Render
 *    <DOM Update - In Single Batch>
 *    - FirstChild ComponentDidMount
 *    - SecondChild ComponentDidMount
 * - Parent ComponentDidMount
 */

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namste React Web Series</h2>
//       {/* <User name={"Anand (Function)"} /> */}
//       <UserClass name={"Anand (Class)"} location={"Hyderabad (Class)"} />
//     </div>
//   );
// };
