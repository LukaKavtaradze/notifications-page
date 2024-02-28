import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      author: {
        user: "Mark Webber",
        img: "./assets/avatar-mark-webber.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      about: "My first tournament today!",
      href: "#",
      date: "1m ago",
      isUnread: true,
    },
    {
      id: "2",
      author: {
        user: "Angela gray",
        img: "./assets/avatar-angela-gray.webp",
      },
      href: "#",
      text: "followed you",
      date: "5m ago",
      isUnread: true,
    },
    {
      id: "3",
      author: {
        user: "Jacob Thompson",
        img: "./assets/avatar-jacob-thompson.webp",
      },
      href: "#",
      text: "has joined your group ",
      about: "Chess Club",
      date: "1 day ago",
      isUnread: true,
    },
    {
      id: "4",
      author: {
        user: "Rizky Hasanuddin",
        img: "./assets/avatar-rizky-hasanuddin.webp",
      },
      href: "#",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      text: "sent you a private message",
      date: "5 days ago",
      isUnread: false,
    },

    {
      id: "5",
      author: {
        user: "Kimberly Smith",
        img: "./assets/avatar-kimberly-smith.webp",
        href: "#",
      },
      text: "commented on your profile picture",
      pic: "./assets/image-chess.webp",
      date: "1 week ago",
      isUnread: false,
    },
    {
      id: "6",
      author: {
        user: "Nathan Peterson",
        img: "./assets/avatar-nathan-peterson.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      about: "5 end-game strategies to increase your win rate",
      date: "2 weeks ago",
      isUnread: false,
    },
    {
      id: "7",
      author: {
        user: "Anna Kim",
        img: "./assets/avatar-anna-kim.webp",
        href: "#",
      },
      text: "left the group",
      about: "Chess Club",
      date: "2 weeks ago",
      isUnread: false,
    },
  ]);

  function readAll() {
    setNotifications((prev) =>
      prev.map((person) => ({ ...person, isUnread: false }))
    );
  }

  function HandleNotification(id) {
    setNotifications((prev) =>
      prev.map((person) =>
        person.id === id ? { ...person, isUnread: false } : person
      )
    );
  }

  return (
    <div className="notification-box">
      <Header
        count={notifications.filter((person) => person.isUnread).length}
        clear={readAll}
      />

      <div className="container">
        {notifications &&
          notifications.map((person) => (
            <div
              className="read"
              key={person.id}
              data-unread={person.isUnread}
              onClick={() => HandleNotification(person.id)}
            >
              <div className="img">
                <img src={person.author.img} alt={person.author.user} />
              </div>
              <section className="not-info">
                <p>
                  <a className="author" href={person.href}>
                    {person.author.user}
                  </a>{" "}
                  <span className="info">{person.text}</span>{" "}
                  {person.about === "Chess Club" && (
                    <span className="club">{person.about}</span>
                  )}
                  {person.about !== "Chess Club" && <span className="ab">{person.about}</span>}{" "}
                  {person.isUnread && <div className="oval"></div>}{" "}
                  <span className="date">{person.date}</span>{" "}
                </p>{" "}
                {person.privateMessage && (
                  <div className="prMessage">
                    <p className="privateMessage">{person.privateMessage}</p>
                  </div>
                )}{" "}
              </section>
              {person.pic && (
                <img className="chess" src={person.pic} alt="Image Chess" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
