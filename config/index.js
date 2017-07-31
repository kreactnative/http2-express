//var logger = require("../loggers/logger");
var os = require("os");
module.exports = (function() {
    var hostname = os.hostname();
    var isDevelop = hostname != "ubuntu-dotnetnat";
    return {
        "SUPER_SECRET": "superSecret",
        "SESSION_SECRET": "A random session secret",
        "PASSWORD_ENCRYPT": "d6F3Efeq",
        "UPLOAD_FOLDER": "uploads/",
        "IMAGE_EXTENSIONS": [
            'png', 'jpg', 'gif', 'jpeg'
        ],
        "HTTP_API_NAME": (isDevelop)
            ? "http://localhost:3098/"
            : "http://128.199.250.80:3098/",
        "EMAIL_LOGO": "http://128.199.250.80:3097/img/email/logo-email.png",
        "TOKEN_EXPIRED_IN": (isDevelop)
            ? "30d"
            : "1d", //expiresIn: Eg: 60, "2 days", "10h", "7d"
        "DB_LOG": (isDevelop)
            ? null //console.log
            : null, // enable db log  : console.log, disable db log  : null
        "emailConfig": {
            "userEmail": "nnnn@gggg.com",
            "password": "nnnnnnnnn"
        },
        "DB_server": {
            "SERVER": "128.199.250.80",
            "DB_NAME": "rmchat",
            "PORT": "3306",
            "USERNAME": "root",
            "PASSWORD": "Kdotnet34567_@"
        },
        "DB": {
            "SERVER": "127.0.0.1",
            "DB_NAME": "rmchat",
            "PORT": "3306",
            "USERNAME": "root",
            "PASSWORD": "56255625"
        }
    };
})();
