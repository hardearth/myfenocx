import mockData, { range } from 'utils/mock-data';

const newPerson = (index) => {
  const tempData = mockData(index);
  const purchaseCode = tempData.number.status(0, 3);
  let purchase;
  switch (purchaseCode) {
    case 3:
      purchase = '500k';
      break;
    case 2:
      purchase = '300k';
      break;
    case 1:
      purchase = '100k';
      break;
    case 0:
    default:
      purchase = '10k';
      break;
  }

  const statusCode = tempData.number.status(0, 2);
  let status;
  switch (statusCode) {
    case 2:
      status = 'Successful';
      break;
    case 1:
      status = 'Rejected';
      break;
    case 0:
    default:
      status = 'Pending';
      break;
  }

  const orderStatusCode = tempData.number.status(0, 7);
  let orderStatus;
  switch (orderStatusCode) {
    case 7:
      orderStatus = 'Refunded';
      break;
    case 6:
      orderStatus = 'Completed';
      break;
    case 5:
      orderStatus = 'Delivered';
      break;
    case 4:
      orderStatus = 'Dispatched';
      break;
    case 3:
      orderStatus = 'Cancelled';
      break;
    case 2:
      orderStatus = 'Shipped';
      break;
    case 1:
      orderStatus = 'Processing';
      break;
    case 0:
    default:
      orderStatus = 'Pending';
      break;
  }

  return {
    id: index,
    firstName: tempData.name.first,
    lastName: tempData.name.last,
    fullName: tempData.name.full,
    email: tempData.email,
    amount: tempData.number.amount,
    detail: tempData.text.title,
    role: tempData.role,
    date: tempData.date,
    progress: tempData.number.percentage,
    status,
    purchase,
    orderStatus,
    contact: tempData.contact,
    country: tempData.address.country,
    address: tempData.address.full
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d, index) => ({
      ...newPerson(index + 1),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
    }));
  };

  return makeDataLevel();
}
