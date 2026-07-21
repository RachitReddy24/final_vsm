export function generateMeetingId() {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);

  return `VMS-${year}-${random}`;
}

export function generateToken(length = 12) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let token = "";

  for (let i = 0; i < length; i++) {
    token += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return token;
}

export function generateMeetingLink(token) {
  return `https://vms.s3d.in/meeting/${token}`;
}

export function generateMeeting() {
  const meetingId = generateMeetingId();

  const token = generateToken();

  const meetingUrl = generateMeetingLink(token);

  return {
    meetingId,
    token,
    meetingUrl,
  };
}