export type TUser = {
    _id?: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    bio: string; 
    isActive: boolean;
    role: "admin" | "user"
    stack: string[];
}