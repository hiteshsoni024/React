import profilePhoto from './image.jpg'
function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePhoto} alt="card image" />
            <h2 className='card-title'>Hitesh Soni</h2>
            <p className='card-text'>Persuing B.tech from IIIT Nagpur</p>
        </div>
    );
}
export default Card