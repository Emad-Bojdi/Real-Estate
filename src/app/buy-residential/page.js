import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential() {
  const res = await fetch("http://localhost:3000/api/profile", { cache: "no-store" });
  const data = await res.json();

  if(data.error) return <h3>مشکلی پیش امده است</h3>
  return (
    <BuyResidentialPage data={data.data} />
  )
}

export default BuyResidential
