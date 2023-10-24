// Intro.tsx
import React from 'react';
import { Social } from './Social';
import { SocialIcon } from '../types';

interface IntroProps {
  image_src: string;
  title: string;
  short_intro: string;
  long_intro: React.ReactNode;
  socialIcons: SocialIcon[];
}

export const Intro: React.FC<IntroProps> = ({ image_src, title, short_intro, long_intro, socialIcons }) => (
  <div className="flex flex-wrap items-center justify-center space-x-6 h-fit w-5/6">
    <div className="px-4 h-80 w-80 flex-shrink-0">
      <img src={image_src} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
    </div>
    <div className="max-w-2xl flex-grow">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-2 text-2xl text-gray-700">{short_intro}</p>
      <p className="mt-4 text-gray-600">{long_intro}</p>
      <Social socialIcons={socialIcons} />
    </div>
  </div>
);

export default Intro;