import { Injectable } from '@nestjs/common';
import { Post } from './types/post';
import { FirestoreService } from 'src/shared/datasource/firestore.service';
import { SavePostArgs } from './args/save-post.args';

@Injectable()
export class PostService {
  constructor(private readonly firestore: FirestoreService) {}

  async getPosts(): Promise<Post[]> {
    const posts = await this.firestore.getDatabase().collection('posts').get();
    return posts.docs.map((post) => ({ id: post.id, ...post.data() } as Post));
  }

  async savePost(args: SavePostArgs): Promise<Post> {
    const {
      data: { name, description, filePath },
    } = args;

    const savedPost = await this.firestore
      .getDatabase()
      .collection('posts')
      .add({ name, description, filePath });
    if (!savedPost) throw new Error('Your post did not saved correctly');

    return { id: savedPost.id, name, description, filePath };
  }
}
