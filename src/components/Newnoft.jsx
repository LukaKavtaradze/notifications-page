const NewNoft = () => {
  let arr = [
    {
      id: "1",
      author: {
        user: "Mark Webber",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!"
      },
      date: "1m ago",
    },
    {
      id: "2",
      author: {
        user: "Angela Gray",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
    {
      id: "3",
      author: {
        user: "Jacob Thompson",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
    {
      id: "4",
      author: {
        user: "Rizky Hasanuddin",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
    {
      id: "5",
      author: {
        user: "Kimberly Smith",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
    {
      id: "6",
      author: {
        user: "Nathan Peterson",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
    {
      id: "7",
      author: {
        user: "Anna Kim",
        img: "./assets/avatar-angela-gray.webp",
      },
      text: "reacted to your recent post",
      date: "1m ago",
    },
  ];

  return (
    <div className="read">
      {arr.map((person) => {
        console.log(person.id);
        <img src={person.img} alt="Mark avatar" />;
        <span className="author">{person.author}</span>;
      })}

      <section className="not-info">
        <span className="info"></span>

        <span className="My-first-tournament"></span>
        <div className="oval"></div>
      </section>
    </div>
  );
};

export default NewNoft;
