import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

export const services: any[] = [AuthService, AuthGuard];

export * from './services/auth.service';
