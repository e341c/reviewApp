"use client";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Review from "@/components/Review";

export default function Home() {
    return (
        <main className="vh-100">
            <Header />
            <div style={{ height: "2000px", marginTop: "80px" }}>
                <Review />
            </div>
        </main>
    );
}
