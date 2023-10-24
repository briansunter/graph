import React from 'react';

interface SocialIcon {
  url: string;
  name: string;
  icon: string;
}

interface SocialProps {
  socialIcons: SocialIcon[];
}

export const Social: React.FC<SocialProps> = ({ socialIcons }) => {
  return (
    <div className="mt-6 space-x-4 flex">
      {socialIcons.map((social) => (
        <a href={social.url} target="_blank" rel="noopener noreferrer" title={`${social.name} Profile`} className="flex flex-col h-30 w-30 justify-center items-center">
          <img className="h-10 w-10" src={social.icon} />
          <span className="font-semibold underline">{social.name}</span>
        </a>
      ))}
    </div>
  );
}