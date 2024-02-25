export const dynamic = 'force-dynamic' // defaults to auto
export default async function GET(request, response) {
    return response.json({ 
        message: "Hello, world!"
     })
}