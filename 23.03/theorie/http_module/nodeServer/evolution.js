import http from 'http'
import fs from 'fs'

// denkt dran client-server
// was bekommt ein server vom client?

// ein Request
// wir müssen jetzt sagen was unser Server mit einem Request machen soll
// wir brauchen eine Funktion

// wir wollen das fs module nutzen um html dateien einzulesen und diese dann im response zum client senden
const sendFile = (path, res, code) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500)
            res.end()
            return
        }
        if (code) res.writeHead(code)
        else res.writeHead(200)
        res.write(data)
        res.end()

    })
}
const requestHandler = (req, res) => {
    console.log('Neuer Request:', req.method, req.url);

    if (req.url === '/') {
        sendFile('./assets/index.html', res)
    } else if (req.url === '/car') {
        sendFile('./assets/shop.html', res)
    } else if (req.url === '/assets/css/style.css') {
        sendFile('./assets/css/style.css', res)
    }

    else {
        sendFile('./assets/404.html', res, 404)
    }

}

const server = http.createServer(requestHandler)

server.listen(9898, () => console.log('Mein Server horcht auf Port', 9898))

