import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

// Validate Appwrite configuration
export const validateAppwriteConfig = () => {
  const requiredFields = [
    'url',
    'projectId', 
    'databaseId',
    'storageId',
    'userCollectionId',
    'postCollectionId',
    'savesCollectionId'
  ];

  const missingFields = requiredFields.filter(field => !appwriteConfig[field as keyof typeof appwriteConfig]);

  if (missingFields.length > 0) {
    console.error('Missing Appwrite configuration:', missingFields);
    return false;
  }

  return true;
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
