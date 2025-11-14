export interface Order {
    orderId: number,
    invoiceNo: number,
    quantity: number,
    status: string,
    createdAt: Date,
    customerId: number,
    productId: number,
    customer: {
      customerId: number,
      country: string
    },
    product: {
      productId: number,
      stockCode: string,
      description: string,
      unitPrice: number
    }
}