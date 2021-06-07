export default function ProductDetail(props) {
  console.log(props);
  return <div>item: {props.match.params.productID}</div>;
}
