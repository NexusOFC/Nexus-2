exports.default = {
   names: ['Group Menu'],
   tags: ['once'],
   command: ['once'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      groupName
   }) => {
      if (!text) return m.reply(`Masukkan Parameternya contoh ${prefix+command} on/off`);
      let change;
      if (text.toLowerCase() === "on") {
         db.chats[m.chat].viewOnce = true
         m.reply(`View Once berhasil diaktifkan di grup ${groupName}`);
      } else if (text.toLowerCase() === "off") {
         db.chats[m.chat].viewOnce = false
         m.reply(`View Once berhasil dimatikan di grup ${groupName}`);
      } else {
         return m.reply(`Masukkan Parameter yang Valid (on/off)`);
      }
   },
   group: true,
   admin: true   
};