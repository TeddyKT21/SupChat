export const AddChat = () => {
    return (
        <div className="addChat">
            <h1>Create New Chat</h1>
            <form onSubmit={submit} className="">
                <Rows>
                    <Input placeholder={"Email"} name="email"/>
                    <Input type={"password"} placeholder={"Password"} name="password"/>
                    <Button type={"submit"} className="">Crate</Button>
                </Rows>
            </form>
        </div>
        
    )
}