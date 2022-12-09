import { Response } from "express";
import { JwtPayload } from "jsonwebtoken";
export declare const getAllProduct: (req: JwtPayload, res: Response) => Promise<void>;
export declare const getProdut: (req: JwtPayload, res: Response) => Promise<void>;
export declare const createProduct: (req: JwtPayload, res: Response) => Promise<void>;
export declare const updateProdut: (req: JwtPayload, res: Response) => Promise<void>;
export declare const deleteProduct: (req: JwtPayload, res: Response) => Promise<void>;
