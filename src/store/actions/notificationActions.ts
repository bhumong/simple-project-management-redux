import firebase from "../../configs/FireBaseConfig";

export const fetchNotifications = () => {
  return (dispatch: any) => {
    return firebase
      .firestore()
      .collection('notifications')
      .get()
      .then((response: any) => {
        let notifications = response.docs.map((datas: any) => {
          let data: any = datas.data();
          return { id: datas.id, ...data }
        });
      	dispatch( {type: 'FETCH_SUCCESS_NOTIF', payload: notifications } )
      }).catch( (error: any) => {
      	dispatch( {type: 'FETCH_ERROR_NOTIF', error} )
      })
  }
}
