export default function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	return (
		<>
			<h1>Product Page</h1>
			<p> {id}</p>
		</>
	)
}
