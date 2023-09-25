import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Button, NavLink } from "react-bootstrap";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function LikeToggle({ id, likes }) {
    const { data: session } = useSession();

    const handleLike = async () => {
        const res = await axios.post(`/api/review/like/${id}`, { userId: session?.user.id });
    };

    const check = likes?.includes(session?.user.id);

    return (
        <div className="d-flex">
            {session ? (
                <Button className="ms-auto" onClick={handleLike}>
                    {!check && (
                        <span>
                            <FontAwesomeIcon icon={faHeart} /> like
                        </span>
                    )}

                    {check && (
                        <span>
                            <FontAwesomeIcon icon={faHeartSolid} /> liked
                        </span>
                    )}
                </Button>
            ) : (
                <NavLink href={"/login"} className="ms-auto p-2 px-3 rounded text-light bg-primary">
                    Login to like this review
                </NavLink>
            )}
        </div>
    );
}
