import { DataSource } from 'typeorm';
import { PaymentMethod } from '../payment-method/payment-method.entity';
import paymentMethods from '../seed/data/payment-methods.json';

export async function seedPaymentMethods(dataSource: DataSource) {
  const repo = dataSource.getRepository(PaymentMethod);
  const count = await repo.count();
  if (count > 0) {
    console.log('✅ Métodos de pago ya insertados');
    return;
  }

  const toInsert = paymentMethods.map(({ slug, label }) => repo.create({ slug, label }));
  await repo.save(toInsert);
  console.log('🚀 Métodos de pago insertados correctamente');
}
