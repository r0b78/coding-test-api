import { Module } from "@nestjs/common";
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { FirestoreService } from '../../shared/datasource/firestore.service';

@Module({
  providers: [PostResolver, PostService, FirestoreService],
  exports: [],
})
export class PostModule {}
