import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

class Events extends Component {
  state = {
    statusView: 'INITIAL',
  }

  displayStatusView = id => {
    const filteredData = eventsList.find(eachItem => eachItem.id === id)
    this.setState({statusView: filteredData.registrationStatus})
  }

  renderinitialView = () => (
    <div className="registration-details">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  renderYetToResiterView = () => (
    <div className="registration-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image-edit1"
      />
      <p>
        A live performance brings so much to your relationship with dance is
        clicked, then the Registered View should be displayed When the image of
        an event item with registrationStatus as REGISTRATIONS_CLOSED is
        clicked, then the Registrations Closed View should be displayed
      </p>

      <button type="button" className="button-element">
        Register Here
      </button>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registration-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />

      <h1>You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="registration-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image-edit3"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  renderstatus = () => {
    const {statusView} = this.state
    switch (statusView) {
      case 'INITIAL':
        return this.renderinitialView()
      case 'YET_TO_REGISTER':
        return this.renderYetToResiterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="full-container">
        <div className="bg-container">
          <h1>Events</h1>
          <ul className="lists-item">
            {eventsList.map(eachItem => (
              <EventItem
                eventDetails={eachItem}
                key={eachItem.id}
                displayStatusView={this.displayStatusView}
              />
            ))}
          </ul>
        </div>
        {this.renderstatus()}
      </div>
    )
  }
}

export default Events
