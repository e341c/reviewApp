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
        "/review/edit",
        "/profile",
        "/api/review/add",
        "/api/review/edit",
        "/api/review/delete",
        "/api/review/like",
        "/api/comment/edit",
        "/api/comment/delete",
        "/admin",
    ],
};
