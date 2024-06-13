import React from 'react';
import Button from '../components/Button';

const whitelistPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
        <p className="mb-4 text-center text-lg">
            Connect to Discord to sign up for whitelist
        </p>
        <Button link="https://discord.gg/5yydr8Hd" label="Discord Invite Link" actionLabel="Become an OG in the Discord " />
    </div>
  );
}

export default whitelistPage;
