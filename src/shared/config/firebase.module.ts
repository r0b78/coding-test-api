import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../../../firebase-admin.json';

@Module({})
export class FirebaseModule {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }
}
