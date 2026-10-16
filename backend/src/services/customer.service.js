import { prisma } from '../lib/prisma.js';
import { conflict, notFound } from '../utils/app-error.js';
import { audit } from './audit.service.js';

export function createCustomer(data) {
  return prisma.customer.create({ data });
}

export function listCustomers() {
  return prisma.customer.findMany({ orderBy: { companyName: 'asc' } });
}



