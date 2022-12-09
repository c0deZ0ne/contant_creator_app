import { Request, Response } from "express";
export declare const option: {
    abortEarly: boolean;
    errors: {
        wrap: {
            label: string;
        };
    };
};
export declare const createUser: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createProduct: (req: Request, res: Response, next: Function) => Promise<void>;
export declare const signin: (req: Request, res: Response, next: Function) => void;
export declare const updateProduct: (req: Request, res: Response, next: Function) => void;
export declare const getUpdate: (req: Request, res: Response, next: Function) => void;
export declare const createUpdate: (req: Request, res: Response, next: Function) => void;
export declare const updateUpdate: (req: Request, res: Response, next: Function) => void;
export declare const deleteUpdate: (req: Request, res: Response, next: Function) => void;
