import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
export const UserCard = (user) => {
    return (
        <div className="UserCard">
            <Rows>
                <Saparate>
                <Line>
                    <div>*image placeholder*</div>
                    <div>{user.username}</div>
                </Line>
                <div>{user.email}</div>
                </Saparate>
            </Rows>
        </div>
    )
}