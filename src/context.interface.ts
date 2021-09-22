import { firestore } from 'firebase-admin';
export interface IContext {
  firestore: firestore.Firestore
  authToken: string
  user: string
}