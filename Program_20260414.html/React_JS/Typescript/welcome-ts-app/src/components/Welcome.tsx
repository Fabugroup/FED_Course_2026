// Welcome.tsx

// type WelcomeMsg = {
//     user: string;
//     course: string;
// }
import type {WelcomeMsg} from "./types";

function Welcome({user, course, date}: WelcomeMsg) {
    return (
        <section>
        <h1> Welcome, {user}!</h1>
        <p> You are learning {course} on {date.toLocaleDateString()} </p>
        </section>
    );

}
export default Welcome