import { db } from "@/config/poybase.config";

export const makeUser = async (address: string, name: string, avatar: string) => {
    const res = await db.collection("User").create([address, name, avatar]);
    return res;
};