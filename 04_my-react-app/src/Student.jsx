import PropTypes from 'prop-types'

function Student (props){
    return(
        <div className="Student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}
// Student.prototype={
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }

Student.defaultProps={
    name:"Chini",
    age:20,
    isStudent:false,
}
export default Student