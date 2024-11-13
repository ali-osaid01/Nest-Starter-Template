// // src/auth/guards/jwt.guard.ts
// import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';  
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtGuard implements CanActivate {
//   constructor(private readonly jwtService: JwtService) {}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const token = this.extractToken(request);

//     if (!token) {
//         throw new UnauthorizedException('Unauthorized Access');
//     }

//     try {
//       const decoded = this.jwtService.verify(token); 
//       request.user = decoded; 
//       return true;
//     } catch (e) {
//       throw new UnauthorizedException('Unauthorized Access');
//     }
//   }

//   private extractToken(request: any): string | null {
//     const authorizationHeader = request.headers['authorization'];
//     if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
//       return authorizationHeader.split(' ')[1]; 
//     }
//     return null;
//   }
// }
