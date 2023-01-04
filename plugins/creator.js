let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ https://wa.me/${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 ɴᴀᴍᴀ ʙᴏᴛ* : xʏʟᴏɪᴅ ʙᴏᴛ
${htjava} *✉️ ɴᴀᴍᴀ ᴏᴡɴᴇʀ* : ʀʏᴀɴ ᴀᴅɪᴛʏᴀ ᴘʀᴀᴛᴀᴍᴀ
${htjava} *♂️ ɢᴇɴᴅᴇʀ* : ʟᴀᴋɪ ʟᴀᴋɪ
${htjava} *🕋 ᴀɢᴀᴍᴀ* : ɪsʟᴀᴍ
${htjava} *⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 12 ᴀɢᴜsᴛᴜs 1997
${htjava} *🎨 ᴜᴍᴜʀ* :24
${htjava} *🧮 ᴋᴇʟᴀs* : -
${htjava} *🧩 ᴘᴇᴋᴇʀᴊᴀᴀɴ* : ɢᴜʀᴜ sᴍᴀ
${htjava} *💬 sɪғᴀᴛ* : ɴɪʟᴀɪ ᴀᴊᴀ sᴇɴᴅɪʀɪ
${htjava} *🗺️ ᴛᴇᴍᴘᴀᴛ ᴛɪɴɢɢᴀʟ* : ᴋᴀʟsᴇʟ, ʙᴀɴᴊᴀʀᴍᴀsɪɴ
${htjava} *❤️ ᴄᴇᴡᴇ* : ᴀʟʏᴀ ᴇʀɪᴛʜᴀ ʀɪᴀɴɴᴀ

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
•·––––––––––––––––––––––––––·•
`
  let teks = 'ᴘɪʟɪʜ ᴅɪʙᴀᴡᴀʜ'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "ɴᴏᴍᴏʀ ᴏᴡɴᴇʀ", rowId: ".owner nomor"},
	{title: "ʙɪᴏᴅᴀᴛᴀ ᴏᴡɴᴇʀ", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} sᴜᴘᴘᴏʀᴛ ʙᴏᴛ –––––––·•`,
	rows: [
	    {title: "ᴅᴏɴᴀᴛᴇ ғᴏʀ ʙᴏᴛ", rowId: ".donasi"},
	{title: "sᴇᴡᴀ ʙᴏᴛ", rowId: ".sewa"},
	{title: "ʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
