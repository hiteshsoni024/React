function Button(){
    const style ={
            backgroundColor: "rgb(47, 165, 212)",
            color: "rgb(255, 255, 255)",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }
    return(
        <button style={style}>Click Me</button>
    );
}
export default Button