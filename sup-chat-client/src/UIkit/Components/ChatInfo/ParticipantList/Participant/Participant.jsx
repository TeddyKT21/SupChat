import "./Participant.css";
import { Line, Saparate } from "../../../../Layouts/Line/Line";
import { DropDown } from "../../../DropDown/DropDown";
export const Participant = ({
  participant,
  admins,
  isUserAdmin,
  options,
  actions,
}) => {
  const isParticipantAdmin = admins.includes(participant._id);
  const filteredOptions = options;
  const filteredActions = actions.map((action) => () => action(participant));
  if (isParticipantAdmin) {
  } else {
  }

  return (
    <div className="Participant" key={participant._id}>
      <Saparate>
          <Line>
            <div>{participant.username}</div>
            <div>{participant.email}</div>
            {isParticipantAdmin && <div className="adminTag">Admin</div>}
          </Line>
        {isUserAdmin && (
          <DropDown options={filteredOptions} actions={filteredActions} />
        )}
      </Saparate>
    </div>
  );
};
