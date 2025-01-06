import { Text } from './Themed';

type Stock = {
    name: String; 
}

type StockListItem = {
    stock: Stock;
}

export default function StockListItem({ stock }: { stock: StockListItem }) {
  return <Text>{stock.name}</Text>;
}