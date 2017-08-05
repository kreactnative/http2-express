//var logger = require("../loggers/logger");
var os = require("os");
module.exports = (function() {
    var hostname = os.hostname();
    var isDevelop = hostname != "kerlang-ubuntu";
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
            : "http://174.138.24.113:3098/",
        "EMAIL_LOGO": "http://174.138.24.113:3097/img/email/logo-email.png",
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
            "SERVER": "174.138.24.113",
            "DB_NAME": "rmchat",
            "PORT": "3306",
            "USERNAME": "knodejs",
            "PASSWORD": "56255625"
        },
        "DB": {
            "SERVER": "174.138.24.113",
            "DB_NAME": "rmchat",
            "PORT": "3306",
            "USERNAME": "knodejs",
            "PASSWORD": "56255625"
        }
    };
})();
