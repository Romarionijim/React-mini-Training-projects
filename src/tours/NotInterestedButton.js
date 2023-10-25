const NotInterestedButton = ({ id, notInterested }) => {
    return (
        <button type='button' className="not-interested-button" onClick={() => notInterested(id)}>Not Interested</button>
    )
}

export default NotInterestedButton