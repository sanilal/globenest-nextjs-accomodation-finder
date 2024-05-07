"use server"

import { redirect } from "next/navigation";
import prisma from "@/lib/db";

export async function createGlobeNestHome({ userId }: { userId: string }) {
 
    const data = await prisma.home.findFirst({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    if(data === null) {
        const data = await prisma.home.create({
            data: {
                userId: userId,
            },
        });

        return redirect(`/create/${data.id}/structure`);
    }
}