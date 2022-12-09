export declare const comparePassword: (password: string, hash: string) => Promise<boolean>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const createToken: (user: any) => Promise<string | null>;
export declare const protect: (req: any, res: any, next: any) => Promise<any>;
