import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../store/actions/notificationActions';
import moment from 'moment';

function Notification(props: any) {
  const fetchData = props.fetchNotifications;
  const {notifications} = props;

  useEffect(() => {
    console.log('use effect');
    fetchData();
  }, [fetchData])

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className='notification'>
            {notifications && notifications.map( (item: any) => {
              return (
                <li key={item.id}>
                  <span className='pink-text'>{item.user}</span>
                  <span> {item.content}</span>
                  <div className="grey-text note-date">
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    notifications: state.notification.notifications,
  }
}

export default connect(mapStateToProps, {fetchNotifications}) (Notification);
