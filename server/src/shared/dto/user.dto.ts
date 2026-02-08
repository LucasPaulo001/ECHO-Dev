export type DTOCreateUser = {
    name: string;
    userName: string;
    email: string;
    password: string;
}

export type DTOUpdateUser = {
    name?: string;
    userName?: string;
}