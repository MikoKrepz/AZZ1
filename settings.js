const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['62881027143352']
global.premium = ['62881027143352']
global.youtube = 'https://youtube.com/channel/MikoSAMP'
global.ownername = 'MikoKrepz'
global.botname ='Miko Botz'
global.donasi = {
    saweria: 'https://saweria.co/MikoMC',
    nomor: '0881027143352'
}
global.packname = 'MikoKrepz'
global.author = 'MikoBotz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','#']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
