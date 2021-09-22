import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './api/posts/post.module';
import { FirebaseModule } from './shared/config/firebase.module';

@Module({
  imports: [
    FirebaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: true,
      playground: {
        endpoint: '/graphql',
      },
      context: ({ req }) => {
        const token = req.headers.authorization ?? '';
        return {
          authToken: token,
          user: '',
        };
      },
    }),
    PostModule,
  ],
})
export class AppModule {}
