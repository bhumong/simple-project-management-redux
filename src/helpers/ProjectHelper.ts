import firebase from '../config/FireBaseConfig';

const ProjectHelper = {
  getProjects: async () => {
    let fbprojects: any = await firebase.firestore().collection('projects').get();
    fbprojects = fbprojects.docs.map((datas: any) => {
      let data: any = datas.data();
      return {id: datas.id, ...data}
    });
    return fbprojects;
  }, 

  addProject : async (content : any, title : any) => {
    let addProject = await firebase
                    .firestore()
                    .collection('projects')
                    .add({
                      content: content,
                      title: title,
                      authorFirstName: 'net',
                      authorLastName: 'ninja',
                      authorId: 1234,
                      createdAt: new Date()
                    });
    return addProject;
  }
}
export default ProjectHelper;