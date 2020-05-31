import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello ninjas");
});

const createNotification = ((notification: any) => {
  return admin
          .firestore()
          .collection('notifications')
          .add(notification)
          .then(doc => console.log('notification added', doc))
          .catch(err => console.log('error create notification', err))
})

export const projectCreated = functions
  .firestore
  .document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }
  
    return createNotification(notification);
  });

export const userJoined = functions
  .auth
  .user()
  .onCreate(user => {
    return admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        console.log('inner user doc', doc)
        const newUser = doc.data();
        const notification = {
          content: 'Join the party',
          user: `${newUser?.firstName} ${newUser?.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp(),
        }
        return createNotification(notification);
      })

  })