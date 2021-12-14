require('dotenv').config();

const jamHost = process.env.JAM_HOST || 'talk.diamondhandshotel.com';
const local = process.env.LOCAL;
const restrictRoomCreation = !!process.env.JAM_RESTRICT_ROOM_CREATION;
const serverAdminId = process.env.JAM_SERVER_ADMIN_ID

module.exports = {
  serverAdminId,
  jamHost,
  local,
  restrictRoomCreation,
};
