export interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ReqUser {
    name: string;
    email: string;
    password: string;
    confirm_password: string | null;
}

export interface ReqLogin {
    email: string;
    password: string;
}
