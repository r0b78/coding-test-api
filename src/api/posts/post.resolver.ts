import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SavePostArgs } from './args/save-post.args';
import { Post } from './types/post';
import { PostService } from './post.service';
import { AuthGuard } from 'src/shared/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthGuard)
  @Query(() => [Post], { nullable: true })
  async getPosts(): Promise<Post[]> {
    return this.postService.getPosts();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Post)
  async savePost(@Args() args: SavePostArgs): Promise<Post> {
    return this.postService.savePost(args);
  }
}
