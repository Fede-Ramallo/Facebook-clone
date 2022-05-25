import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Fedee Ramallo",
        src: "https://pbs.twimg.com/media/EXUgmSsXQAAlWg7.jpg",
        profile: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/95733825_1643004032514965_3022711138686074880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFtvc6Q0bxMaLv_ODNJCy6RfVonaZ7M8GN9WidpnszwYwV2irv1QuiCUS_WTId2YmspS4dW5IWbSfQof5Edh0Se&_nc_ohc=60kzuyFeNasAX-2dcSW&_nc_ht=scontent.fcor11-2.fna&oh=00_AT-dUCKqRD8YMCTNXldrgMIRnn0gbsXZY2PQlpGixS-yNw&oe=62B45DEF"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map(story => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories;