import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request : NextRequest) {

    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));


// Headers
    const headerList = await headers();
    console.log(headerList.get("Authorization"))

// Cookies
    // Theme
    // const themeStore = await cookies();  // other option on setting cookie in headers
    // themeStore.set("theme", "dark"); 
    const theme = request.cookies.get("theme");
    console.log(theme);
    // Cookie Store
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    console.log(cookieStore.get("resultsPerPage"));

    return new Response("<h1>Profile Data API<h1>", {
        headers: {
            "Content-Type": "text-html",
            "Set-Cookie": "theme=dark",
        },
    });
}



