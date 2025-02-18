export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}
export interface IAuthService {
    signIn(email: string, password: string): Promise<unknown>;
    signUp(email: string, password: string): Promise<unknown>;
    signOut(): Promise<void>;
    onAuthStateChanged(callback: (user: unknown) => void): () => void;
    getCurrentUser(): unknown | null;
    getUserRoles(user: unknown): Promise<Role[]>;
}