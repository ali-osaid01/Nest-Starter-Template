// import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
// import { Response,Request,NextFunction} from "express";

// @Injectable()
// export class authenticationMiddleware implements NestMiddleware{
//     use(req: Request, res: Response, next:NextFunction) {

//         const token = req.headers.authorization?.split(" ")[1];
//         console.log("Token");

//         if(!token) throw new UnauthorizedException();
//         console.log("MIDDLEWARE CALLED")
//         next();
//     }
// }