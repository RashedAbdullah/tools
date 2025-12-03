"use server";

import { ProjectType, WorkspaceType } from "@/app/generated/prisma/enums";
import prisma from "@/lib/prisma";

async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return prisma.user.create({
    data,
  });
}

async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

async function deleteUser(id: string) {
  return prisma.user.delete({
    where: { id },
  });
}

async function createProject(data: {
  name: string;
  description?: string;
  type?: ProjectType;
  userId: string;
}) {
  return prisma.project.create({ data });
}

async function getProjectsByUser(userId: string) {
  return prisma.project.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

async function getProjectById(id: string) {
  return prisma.project.findUnique({
    where: { id },
  });
}

async function updateProject(id: string, data: any) {
  return prisma.project.update({
    where: { id },
    data,
  });
}

async function deleteProject(id: string) {
  return prisma.project.delete({
    where: { id },
  });
}

async function startWorkSession(data: {
  userId: string;
  projectId?: string;
  workspace?: WorkspaceType;
  notes?: string;
}) {
  return prisma.workSession.create({
    data: {
      ...data,
      startTime: new Date(),
    },
  });
}

async function endWorkSession(sessionId: string) {
  return prisma.workSession.update({
    where: { id: sessionId },
    data: { endTime: new Date() },
  });
}

async function updateWorkSession(id: string, data: any) {
  return prisma.workSession.update({
    where: { id },
    data,
  });
}

async function deleteWorkSession(id: string) {
  return prisma.workSession.delete({
    where: { id },
  });
}

async function getWorkSessionsByUser(userId: string) {
  return prisma.workSession.findMany({
    where: { userId },
    orderBy: { startTime: "desc" },
    include: {
      project: true,
    },
  });
}

async function getWorkSessionsByProject(projectId: string) {
  return prisma.workSession.findMany({
    where: { projectId },
    orderBy: { startTime: "desc" },
  });
}

async function getMonthlyHours(userId: string, year: number, month: number) {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);

  const sessions = await prisma.workSession.findMany({
    where: {
      userId,
      startTime: { gte: start, lt: end },
      endTime: { not: null },
    },
  });

  const totalMs = sessions.reduce((sum, s) => {
    const start = new Date(s.startTime).getTime();
    const end = new Date(s.endTime!).getTime();
    return sum + (end - start);
  }, 0);

  const totalHours = totalMs / (1000 * 60 * 60);
  return { totalHours };
}

export {
  createUser,
  getUserById,
  getUserByEmail,
  deleteUser,
  createProject,
  getProjectsByUser,
  getProjectById,
  updateProject,
  deleteProject,
  startWorkSession,
  endWorkSession,
  updateWorkSession,
  deleteWorkSession,
  getWorkSessionsByUser,
  getWorkSessionsByProject,
  getMonthlyHours,
};
