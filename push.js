var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BNQ_zBQ-ECox8JN1DeqFNZmHw1phQA5rtyuAeQPSKWsjgzAnKrKeioOIWCUylqEwiX4uXdUlUOYaKRUqjuqcPh4",
  privateKey: "2m5p1a65B2bX0s_M604SE7LcNjPxg48MOo2ZYpsI8jA",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cSVY5Wbb2Gw:APA91bFfn_Ux8CK77xZd0hu8MMp73j214WohEJ2-ww6PDXwMcsu49DxR-bRJxYlXSJCt3Xis7RmKa0Sufc_l3SBoRJxqPutpkTWlfNTlnZnhvj520ul5Jn_nWRHRx2cNFdZFpWFz7vAv",
  keys: {
    p256dh:
      "BJSbJBn+ct2UBGI//kbyrmAKUQtKyKv1a3jYWJZ5ZXE4lfjcPDsabz9I/tRp8M0JiH/87d5mnggVHvZ7l+bXz0g=",
    auth: "870IPDKBjf4F6NiWZwBgHg==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "456469480760",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
