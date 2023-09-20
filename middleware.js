import { withAuth } from "next-auth/middleware";

export default withAuth(
    {
        pages: {
            signIn: "/login",
        },
    }
);

export const config = {
    matcher: [
        "/review/add",
        "/profile",
        "/api/review/add",
        "/api/review/edit",
        "/api/review/delete",
        "/admin",
    ],
};
