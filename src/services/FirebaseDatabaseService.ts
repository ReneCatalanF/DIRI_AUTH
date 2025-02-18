import { getDatabase, ref, get, set } from 'firebase/database';
import { app } from './FirebaseStorage';
import { Role } from './IAuthService';
import { IUserDatabaseService } from './IUserDatabaseService';
export class FirebaseDatabaseService implements IUserDatabaseService {
    async getUserRoles(uid: string): Promise<Role[]> {
        const db = getDatabase(app);
        const rolesRef = ref(db, `users/${uid}/roles`);
        const snapshot = await get(rolesRef);
        if (snapshot.exists()) {
            const rolesData = snapshot.val();
            const roles: Role[] = [];
            if (rolesData.admin === true) {
                roles.push(Role.ADMIN);
            }
            // Aquí se pueden agregar otros roles según se requiera.
            if (roles.length === 0) {
                // Si no se ha asignado ningún rol, se asume el rol de usuario.
                roles.push(Role.USER);
            }
            return roles;
        }
        return [Role.USER];
    }
    async setUserRoles(uid: string, data: { email: string; roles: { admin: boolean } }): Promise<void> {
        const db = getDatabase(app);
        const userRef = ref(db, `users/${uid}`); // Reference to the user's data

        try {
            await set(userRef, data); // Set the user data, including roles
            console.log("User roles set successfully for UID:", uid);
        } catch (error) {
            console.error("Error setting user roles:", error);
            throw error; // Re-throw the error to be handled by the caller
        }
    }
}