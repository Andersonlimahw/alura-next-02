// Pode funcionar como BFF mas sua utilização é opcional.
export default async function Handler(req, res) {
    console.log('[Request]: ', req);
    return res.status(200).json({ message: 'Hello from next api'});
}