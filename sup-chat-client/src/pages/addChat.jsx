import React, { useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Rows } from "../UIkit/Layouts/Line/Line";
import { Button } from "../UIkit/Components/Button/Button";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { AuthLayout } from "../UIkit/Layouts/AuthLayout/AuthLayout";

export const AddChat = () => {
  const contacts = useSelector((state) => state.userSlice.user?.friends);
  const currentUser = useSelector((state) => state.userSlice.user);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [admins, setAdmins] = useState([
    { value: currentUser._id, label: currentUser.username },
  ]);
  const [selectedParticipants, setSelectedParticipants] = useState([
    { value: currentUser._id, label: currentUser.username },
  ]);
  const options = contacts.map((contact) => ({
    value: contact._id,
    label: contact.username,
    isDisabled: contact._id === currentUser._id,
  })); // Transform contacts to options

  const handleSelectChange = (selected) => {
    setSelectedParticipants(selected);
    const newAdmins = admins.filter(admin => selected.includes(admin));
    setAdmins(newAdmins);
  };

  const handleAdminChange = (selected) => {
    setAdmins(selected);
  };

  const submit = async (e) => {
    e.preventDefault();

    const participantIds = selectedParticipants.map(
      (participant) => participant.value
    );

    const newChat = {
        name,
        description,
        admins,
        participants: participantIds,
    }

    console.log("new chat", newChat);
  };

  const form = (
    <div>
      <h1>Create New Chat</h1>
      <form onSubmit={submit}>
        <Rows>
          <Input
            placeholder={"Name of Chat"}
            onTextChange={setName}
            name="name"
          />
          <Input
            placeholder={"Description"}
            onTextChange={setDescription}
            name="description"
          />
          <Select
            placeholder={"Admins"}
            isMulti
            options={options}
            onChange={handleAdminChange}
            defaultValue={[
              { value: currentUser._id, label: currentUser.username },
            ]}
          />
          <Select
            placeholder={"Participants"}
            isMulti
            options={options}
            onChange={handleSelectChange}
            defaultValue={[
              { value: currentUser._id, label: currentUser.username },
            ]}
          />
          <Button type={"submit"} className="btn">
            Create
          </Button>
        </Rows>
      </form>
    </div>
  );

  return <AuthLayout className={"addChatForm"}>{form}</AuthLayout>;
};
