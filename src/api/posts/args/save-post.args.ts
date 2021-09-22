import { ArgsType, Field } from "@nestjs/graphql";
import { SavePostInput } from "../input/save-post.input";

@ArgsType()
export class SavePostArgs {
  @Field(() => SavePostInput)
  data!: SavePostInput
}