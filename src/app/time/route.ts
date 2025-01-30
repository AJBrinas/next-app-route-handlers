
export const dynamic = "force-static"; // forces the web to be static, meaning it is frozen
export const revalidate = 10; // Refreshes the web in 10 secs to revalidate
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
    
}
