import { Client } from 'react-native-appwrite';

export const config = {
  endpoint: "https://cloud.io/v1",
  platform: "com.jsm.rtmax",
  projectId: "667a63ed00276d80f23b",
  databaseId: "667a68220008d2061a26",
  userCollection: "667a6832003b65b5e639",
  videoCollectionId: "667a686b0007ace1e249",
  storageId : "667a6b8c000d706a640a"
};

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

    const account = new Account(client);

    const createUser =()=>

account.create(ID.unique(), 'me@example.com', 'password', 'rt max')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
