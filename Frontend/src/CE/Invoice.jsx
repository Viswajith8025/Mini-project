import React from "react";

const InvoiceApp = () => {
  const currentDate = "2/18/25, 9:58 AM";

  const invoiceData = {
    company: {
      name: "Zylker Electronics Hub",
      address: "146 Avenue Street",
      city: "Greater South Avenue",
      state: "New York New York 10001",
      country: "U.S.A",
    },
    invoice: {
      number: "INV-000001",
      date: "05 Aug 2024",
      dueDate: "05 Aug 2024",
      dueStatus: "Due on Receipt",
    },
    customer: {
      name: "Ms. Mary D. Dunton",
      billingAddress: "1234 Maple Lane Road\nNeedham\n02192 Maine",
      shippingAddress: "1234 Maple Lane Road\nNeedham\n02192 Maine",
    },
    items: [
      {
        id: 1,
        name: "Camera",
        description: "Desk camera with advanced shooting capabilities",
        quantity: 1.0,
        rate: 899.0,
        amount: 899.0,
      },
      {
        id: 2,
        name: "Fitness Tracker",
        description: "Activity tracker with heart rate monitoring",
        quantity: 1.0,
        rate: 179.0,
        amount: 179.0,
      },
      {
        id: 3,
        name: "Laptop",
        description: "Lightweight laptop with a powerful processor",
        quantity: 1.0,
        rate: 1199.0,
        amount: 1199.0,
      },
    ],
    subtotal: 2277.0,
    taxRate: 5.0,
    total: 2338.35,
    balanceDue: 2338.35,
    terms:
      "Full payment is due upon receipt of this invoice. Late payments may incur additional charges or interest as per the applicable laws.",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>{currentDate}</div>
          <div className="flex space-x-4">
            <button className="flex items-center">
              🖨️ <span className="ml-1">Print</span>
            </button>
            <button className="flex items-center">
              📥 <span className="ml-1">Download</span>
            </button>
          </div>
        </div>
      </header>

      {/* Invoice Content */}
      <main className="flex-grow py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div>
            {/* Invoice Header */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-6 sm:mb-0">
                  <h2>{invoiceData.company.name}</h2>
                  <address className="mt-2 not-italic">
                    {invoiceData.company.address}
                    <br />
                    {invoiceData.company.city}
                    <br />
                    {invoiceData.company.state}
                    <br />
                    {invoiceData.company.country}
                  </address>
                </div>
                <div className="text-right">
                  <h1>INVOICE</h1>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Invoice #</span>
                      <span>{invoiceData.invoice.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Invoice Date</span>
                      <span>{invoiceData.invoice.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status</span>
                      <span>{invoiceData.invoice.dueStatus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Due Date</span>
                      <span>{invoiceData.invoice.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <div>Bill To</div>
                      <address className="mt-1 not-italic whitespace-pre-line">
                        {invoiceData.customer.name}
                        <br />
                        {invoiceData.customer.billingAddress}
                      </address>
                    </div>
                    <div>
                      <div>Ship To</div>
                      <address className="not-italic whitespace-pre-line">
                        {invoiceData.customer.shippingAddress}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Items */}
            <div className="p-6 sm:p-8">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left">Item & Description</th>
                    <th className="px-4 py-3 text-center">Qty</th>
                    <th className="px-4 py-3 text-right">Rate</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-4">
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                      </td>
                      <td className="px-4 py-4 text-center">{item.quantity.toFixed(2)}</td>
                      <td className="px-4 py-4 text-right">${item.rate.toFixed(2)}</td>
                      <td className="px-4 py-4 text-right">${item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Invoice Summary */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="max-w-sm mb-6 sm:mb-0">
                  <h3>Thanks for shopping with us.</h3>
                  
                  <div className="mt-4">
                    <h3>Terms & Conditions</h3>
                    <p>{invoiceData.terms}</p>
                  </div>
                </div>
                
                <div className="w-full sm:w-64">
                  <div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>Sub Total</div>
                      <div className="text-right">${invoiceData.subtotal.toFixed(2)}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>Tax Rate</div>
                      <div className="text-right">{invoiceData.taxRate.toFixed(2)}%</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>Total</div>
                      <div className="text-right">${invoiceData.total.toFixed(2)}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div>Balance Due</div>
                      <div className="text-right">${invoiceData.balanceDue.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center">Invoice Format webp (425×576)</p>
        </div>
      </footer>
    </div>
  );
};

export default InvoiceApp;