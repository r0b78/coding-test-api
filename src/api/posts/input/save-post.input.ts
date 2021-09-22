import {Field, InputType, Int} from '@nestjs/graphql'

@InputType()
export class SavePostInput {
  @Field(() => String, {nullable: true})
  name: string;

  @Field(() => String, {nullable: true})
  description: string;

  @Field(() => String, {nullable: true})
  filePath?: string;
}