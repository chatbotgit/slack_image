
var express = require('express');
var app = express();


/**set port using env variable */
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
    console.log("Listening on --- Port 3000");
});

Slack = require('node-slackr');
slack = new Slack('https://hooks.slack.com/services/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');
app.get('/getimage', (req, res) => {
    messages = {
        text: "Display Image",
        channel: "#notifications",
        "attachments": [
            {
                "fallback": "Required plain-text summary of the attachment.",
                "color": "#2eb886",
                "pretext": "Data description is here",
                "author_name": "Author Name",
                "author_link": "https://slack.global.ssl.fastly.net/0cc2/pdfs/users_guide.pdf",
                "author_icon": "download.png",
                "title": "Slack API Documentation",
                "title_link": "https://slack.global.ssl.fastly.net/0cc2/pdfs/users_guide.pdf",
                "text": "Optional text that appears within the attachment",
                "fields": [
                    {
                        "title": "Priority",
                        "value": "High",
                        "short": false
                    }
                ],
                //"image_url": "https://static.dialogflow.com/common/favicon.png",
                "thumb_url": "https://static.dialogflow.com/common/favicon.png",
                "thumb_link": "https://static.dialogflow.com/common/favicon.png",
                "footer": "Slack API",
                "footer_icon": "https://static.dialogflow.com/common/favicon.png",
                "ts": 123456789
            }
        ]

    };
    console.log("Image sent to slack");
    slack.notify(messages, function (err, result) {
        console.log(err, result);
    });

});