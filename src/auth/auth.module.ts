import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthMiddleware } from "./auth.middleware";
import { AuthService } from "./auth.service";


@Module({
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule implements NestModule{
    //configure() method can be made asynchronous using async/await
    configure(consumer: MiddlewareConsumer) {
        consumer
        
        //apply() method may either take a single middleware,
        // or multiple arguments to specify multiple middlewares
        .apply(AuthMiddleware)
        .forRoutes({ path: 'auth', method: RequestMethod.GET });
    }
}