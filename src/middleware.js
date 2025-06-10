import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

// Redireciona usuários não autenticados de qualquer rota para "/login", exceto "/login" e "/cadastre-se"
if (
    !token &&
    pathname !== "/login" &&
    pathname !== "/cadastro" &&
    pathname !== "/conclusao"
) {
    return NextResponse.redirect(new URL("/login", request.url));
}

  // (Opcional) Redireciona usuários logados tentando acessar "/login" para "/"
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Aplica o middleware a todas as rotas exceto as internas
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
