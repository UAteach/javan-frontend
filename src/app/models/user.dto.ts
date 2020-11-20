export class UserDTO{
    id: number;
    username: string;
    groups: string[];
    classification: number;
    first_name: string;
    last_name: string;
    email: string;
}

export class AuthToken{
    token: string;
}

export class UserLogin{
    username: string;
    password: string;
}