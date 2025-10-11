import { useState } from 'react';

interface AutoplayPromptProps {
  onPermissionGranted: () => void;
}

const AutoplayPrompt = ({ onPermissionGranted }: AutoplayPromptProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnterSite = async () => {
    setIsLoading(true);

    try {
      const video = document.createElement('video');
      video.muted = false;
      video.volume = 0.1;
      video.src =
        'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAANhtZGF0AAAK';

      await video.play();
      video.pause();
      video.remove();

      onPermissionGranted();
    } catch {
      onPermissionGranted();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-gray-900 z-50 flex items-center justify-center'>
      <div className='text-center text-white max-w-md mx-auto px-8'>
        <div className='mb-8'>
          <img
            src='/img/fight-club-logo.svg'
            alt='Fight Club'
            className='w-32 h-32 mx-auto mb-6'
          />
          <h1 className='text-4xl font-bold mb-4'>FIGHT CLUB</h1>
          <p className='text-gray-300 mb-8'>
            For the best experience, please allow audio autoplay in your
            browser.
          </p>
        </div>

        <button
          onClick={handleEnterSite}
          disabled={isLoading}
          className='bg-white hover:bg-white/70 text-red-900 font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
        >
          {isLoading ? 'Loading...' : 'ENTER THE FIGHT'}
        </button>

        <div className='mt-6 text-sm text-gray-400'>
          <p>Click the button above to enable audio and enter the site</p>
          <p className='mt-2'>
            You may see a browser permission popup - please click "Allow"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoplayPrompt;
