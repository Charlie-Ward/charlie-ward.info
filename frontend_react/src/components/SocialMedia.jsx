import React from 'react';
import { BsTwitter, BsGithub, BsTwitch } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://twitter.com/CharlieWard0101' target='_blank'>
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href='https://github.com/Charlie-Ward' target='_blank'>
      <div>
        <BsGithub />
      </div>
    </a>
    <a href='https://www.twitch.tv/lousyboi_' target='_blank'>
      <div>
        <BsTwitch />
      </div>
    </a>
  </div>
);

export default SocialMedia;