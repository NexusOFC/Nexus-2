let rewards = {
   limit: 15,
   uang: 25
}
let lon = Math.floor(Math.random() * 3);
let te = ['❎ Salah', '😵 Kurang Tepat', '😪 Belum Benar'][lon];

module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.cak') && !budy.includes('.caklontong') && !m.isBaileys) {
         let jawaban = caklontong[m.sender.split('@')[0]]
         let deskripsi = caklontong_desk[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            await conn.adReply(m.chat, `Jawaban Benar 🎉 \n*${deskripsi}* \nKamu mendapatkan:\n+ ${rewards.limit} limit 🎟\n+ ${rewards.uang} uang 💰`, setting.thumbnail, m)
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            delete caklontong[m.sender.split('@')[0]]
            delete caklontong_desk[m.sender.split('@')[0]]
         } else {
            return m.reply(te)
         }
      }
   }
};