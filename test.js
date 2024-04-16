const Data = [
  {
    name: "Popular",
    data: [
      {
        title: "How do i contact Support Team?",
      },
      {
        title: "What does 'ads limit' mean?",
      },
      {
        title: "How can i sell on sociamaket",
      },
      {
        title: "How to buy somthing on sociamaket",
      },
      {
        title: "How to report illegal activities on sociamaket",
      },
      {
        title: "what are premium services",
      },
      {
        title: "How to get paid to inviting people to join sociamaket",
      },
    ],
  },
  {
    name: "General Information",
    data: [
      {
        title: "What is a 'MarketPlace",
      },
      {
        title: "Do you have any stores?",
      },
      {
        title: "Do you have any delivery",
      },
      {
        title: "Can i unsuscribe from the newsletter?",
      },
    ],
  },
  {
    name: "For sellers",
    data: [
      {
        title: "I've posted my ads but I can't find it on sociamaket. why?",
      },
      {
        title: "What can i do to sell better?",
      },
    ],
  },
  {
    name: "posting ad",
    data: [
      {
        title: "What happen after i click on 'post ad",
      },
      {
        title: "Posting rules",
      },
      {
        title: "Tips for creating an effective ad",
      },
      {
        title: "Prohibited items on sociamaket",
      },
    ],
  },
];
function filtered(str) {
  return Data.map((category) => ({
    name: category.name,
    data: category.data.filter((item) =>
      item.title.toLocaleLowerCase().includes(str.toLocaleLowerCase())
    ),
  }))
    .filter((arr) => arr.data.length > 0 && arr)
    .map((item) => ({
      name: item.name,
      data: item.data.map((x) => ({ title: highlightText(x.title, str) })),
    }));
}
function highlightText(text, str) {
  const regex = new RegExp(`(${str})`, "gi");
  return text.replace(regex, "<Box color={colors['primary']}>$1</Box>");
}

console.log(filtered("What"));
let s = [
  {
    name: "posting ad",
    data: [
      {
        title: "What happen after i click on 'post ad",
      },
      {
        title: "Posting rules",
      },
      {
        title: "Tips for creating an effective ad",
      },
      {
        title: "Prohibited items on sociamaket",
      },
    ],
  },
];
