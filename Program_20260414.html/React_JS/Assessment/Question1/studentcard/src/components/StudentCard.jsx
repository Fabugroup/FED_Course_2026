/**
 * StudentCard
 * Displays a student's name, course, and email.
 *
 * Props:
 *  - name   (string) : Student's full name
 *  - course (string) : Course name
 *  - email  (string) : Email address
 */


function StudentCard(props) {
    const {name, course, email} = props;


  return (
    <div className = "card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Email: {email}</p>
    </div>
  );
}


export default StudentCard;
