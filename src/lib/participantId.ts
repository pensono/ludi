export function getParticipantId() {
  let participantId = window.localStorage.getItem("participantId");
  if (participantId) {
    return participantId;
  }

  participantId = Math.floor((Math.random() * 1000000)).toString();
  window.localStorage.setItem("participantId", participantId);
  return participantId;
}