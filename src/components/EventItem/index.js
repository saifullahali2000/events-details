// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, displayStatusView} = props
  const {imageUrl, name, location, id} = eventDetails
  const onClickDisplayRegistrationStatus = () => {
    displayStatusView(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="image-button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onClickDisplayRegistrationStatus}
        />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
