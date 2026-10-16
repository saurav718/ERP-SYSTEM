import * as customerService from '../services/customer.service.js';
import { serialize } from '../utils/serializers.js';

export async function createcustomer(req, res) {
  const customer = await customerService.createCustomer(req.validatedBody);
  res.status(201).json({ success: true, data: serialize(customer) });
}

export async function customerlist(_req, res) {
  res.json({ success: true, data: serialize(await customerService.listCustomers()) });
}



