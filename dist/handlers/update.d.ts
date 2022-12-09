import { Request, Response } from "express";
export declare const getOneUpdate: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUpdates: (req: Request, res: Response, next: Function) => Promise<void>;
export declare const createUpdate: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUpdate: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUpdate: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
