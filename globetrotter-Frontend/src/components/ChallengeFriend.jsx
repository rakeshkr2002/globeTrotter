import { WhatsappShareButton } from 'react-share';

const ChallengeFriend = ({ userId, userScore }) => {
  const shareUrl = `https://globetrotter.com/game?userId=${userId}`;
  const title = `Join me in Globetrotter! My score is ${userScore}. Can you beat it?`;

  return (
    <div>
      <WhatsappShareButton url={shareUrl} title={title}>
        <button>Challenge a Friend on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ChallengeFriend;