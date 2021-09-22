import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';

@Injectable()
export class FirestoreService {
  private dbReference: firestore.Firestore;

  getDatabase() {
    if (!this.dbReference) {
      this.dbReference = admin.firestore();
      this.dbReference.settings({ ignoreUndefinedProperties: true });
    }
    return this.dbReference;
  }
}
