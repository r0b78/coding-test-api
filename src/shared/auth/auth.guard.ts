import { Injectable, CanActivate, ExecutionContext, Logger } from "@nestjs/common"
import { GqlExecutionContext } from "@nestjs/graphql"
import * as admin from 'firebase-admin'
import { IContext } from "src/context.interface"

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const executionContext: IContext = ctx.getContext<IContext>()
    const token = executionContext.authToken

    if (token && token.startsWith('Bearer ')) {
      try {
        const verificationResult = await admin
          .auth()
          .verifyIdToken(token.replace('Bearer ', ''))

        const isValidEmail = !!verificationResult?.email
        if (isValidEmail) executionContext.user = verificationResult.email

        return isValidEmail
      } catch (error) {
        Logger.error(`Authentication error: ${error}`)
        return false
      }
    }

    return false
  }
}