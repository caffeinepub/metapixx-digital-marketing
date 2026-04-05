import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getContactInquiry(id: string): Promise<ContactInquiry>;
    getNextId(): Promise<bigint>;
    submitContactInquiry(name: string, email: string, phone: string, message: string): Promise<string>;
}
