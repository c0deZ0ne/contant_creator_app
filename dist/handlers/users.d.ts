import { Request, Response } from "express";
export declare const createNewUser: (req: Request | any, res: Response | any, next: any) => Promise<any>;
export declare const signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
