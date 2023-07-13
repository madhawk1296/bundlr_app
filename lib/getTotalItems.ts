export default function getTotalItems(items: any[]) {
  return items.reduce((acc, item) => acc + item.amount, 0)
}