import { IAuthService, Role } from './IAuthService';
import {
    getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth';
import { app } from './FirebaseStorage';
import { FirebaseDatabaseService } from './FirebaseDatabaseService';
const auth = getAuth(app);

export class FirebaseAuthService implements IAuthService {
    private databaseService: FirebaseDatabaseService;
    constructor() {
        this.databaseService = new FirebaseDatabaseService();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signIn(email: string, password: string): Promise<any> {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signUp(email: string, password: string): Promise<any> {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    signOut(): Promise<void> {
        return signOut(auth);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onAuthStateChanged(callback: (user: any) => void): () => void {
        return onAuthStateChanged(auth, callback);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCurrentUser(): any | null {
        return auth.currentUser;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getUserRoles(user: any): Promise<Role[]> {
        // Para el usuario por defecto, se devuelve siempre el rol ADMIN.
        if (user.email === 'ricf1@mscloud.ua.es') {
            return [Role.ADMIN];
        }
        // Delegamos la obtención de roles al servicio de base de datos.
        return this.databaseService.getUserRoles(user.uid);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async setUserRoles(uid: string, data: { email: string; roles: { admin: boolean } }): Promise<void> {
        try {
            await this.databaseService.setUserRoles(uid, {
                email: data.email,
                roles: { admin: false }
            });
            console.log("Roles de usuario establecidos correctamente.");
        } catch (error) {
            console.error("Error al establecer roles de usuario:", error);
            throw error; // Re-lanza el error para que se pueda manejar en el componente
        }
    };
}