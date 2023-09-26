const noNotif = document.getElementById("no_notif");
const messRead = document.getElementById("make_mess_read");
const recentMess = document.querySelectorAll(".recent_notif");
const notifDots = document.querySelectorAll(".notif-dot");

const readMessage = () => {
  noNotif.textContent = "0";
  Object.assign(messRead.style, {
    color: "#696c70",
    fontSize: "16px",
    fontWeight: "normal"
  });

  recentMess.forEach(message => message.style.backgroundColor = "#fff");
  notifDots.forEach(message => message.style.display = "none");
};

messRead.addEventListener("click", readMessage);
