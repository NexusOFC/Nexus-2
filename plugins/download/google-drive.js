exports.default = {
   names: ['Downloader'],
   tags: ['googledrive'],
   command: ['gdrive', 'googledrive'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Masukan Link Google Drove nya contoh ${prefix+command} https://drive.google.com/file/d/1BKaXs8uIt4_C_dEKUje-nn-XYYNOO07y/view?usp=drivesdk`)
      let res = await Format.gdrive(text);
      if (!res) throw res;
      let drive = ` ${star} 𝐆𝐎𝐆𝐆𝐋𝐄 𝐃𝐑𝐈𝐕𝐄\n`
      drive += ` ${java} Name: ${res.fileName}\n`
      drive += ` ${java} Type: ${res.mimetype}\n`
      drive += ` ${java} Size: ${res.fileSize}\n`
      conn.adReply(m.chat, drive, cover, m).then(() => {
         conn.docUrl(m.chat, res.downloadUrl, res.fileName, '', res.mimetype, m);
      });
   },
};