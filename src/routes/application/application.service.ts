import { PrismaClient } from '@prisma/client';
import { StatusEnum } from '../../types/StatusEnum';
const prisma = new PrismaClient();

export const createApplication = async (userInfo: any) => {
    const result = await prisma.user.create({
        data: { 
            fio: userInfo.fio,
            email: userInfo.email,
            phone: userInfo.phone,
            type: userInfo.type,
            status: StatusEnum.PENDING
        },
    });

    return result;
};