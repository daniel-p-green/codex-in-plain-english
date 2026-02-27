import {
  AbsoluteFill,
  Easing,
  OffthreadVideo,
  Sequence,
  interpolate,
  useCurrentFrame,
} from 'remotion';

import dashboardDesktop from './assets/clips/dashboard-desktop.webm';
import dashboardMobile from './assets/clips/dashboard-mobile.webm';
import landingToModuleDesktop from './assets/clips/landing-to-module-desktop.webm';
import landingToModuleMobile from './assets/clips/landing-to-module-mobile.webm';
import moduleFlowDesktop from './assets/clips/module-flow-desktop.webm';
import moduleFlowMobile from './assets/clips/module-flow-mobile.webm';

type Orientation = 'landscape' | 'portrait';

type CourseTeaserProps = {
  orientation: Orientation;
};

type Clip = {
  src: string;
  caption: string;
};

const landscapeClips: Clip[] = [
  {
    src: landingToModuleDesktop,
    caption: 'Live flow: landing to first module',
  },
  {
    src: moduleFlowDesktop,
    caption: 'Live flow: module navigation and knowledge check',
  },
  {
    src: dashboardDesktop,
    caption: 'Inspired by Gabriel Chua · x.com/gabrielchua/status/2026832978056458383',
  },
];

const portraitClips: Clip[] = [
  {
    src: landingToModuleMobile,
    caption: 'Mobile live flow: landing to first module',
  },
  {
    src: moduleFlowMobile,
    caption: 'Mobile live flow: module interactions',
  },
  {
    src: dashboardMobile,
    caption: 'Source attribution: Gabriel Chua original thread',
  },
];

const FADE_IN = 10;
const FADE_OUT = 8;

const ClipOverlay = ({ caption, duration, isPortrait }: { caption: string; duration: number; isPortrait: boolean }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, FADE_IN], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const fadeOut = interpolate(frame, [duration - FADE_OUT, duration], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{ opacity }}>
      <div
        style={{
          position: 'absolute',
          left: isPortrait ? 20 : 28,
          right: isPortrait ? 20 : 28,
          bottom: isPortrait ? 20 : 18,
          background: 'rgba(0, 0, 0, 0.58)',
          border: '1px solid rgba(255,255,255,0.16)',
          borderRadius: 12,
          padding: isPortrait ? '10px 12px' : '9px 12px',
          color: '#f4f4f5',
          fontSize: isPortrait ? 16 : 14,
          lineHeight: 1.26,
          letterSpacing: '0.01em',
          fontFamily:
            'OpenAI Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {caption}
      </div>
    </AbsoluteFill>
  );
};

export const CourseTeaser = ({ orientation }: CourseTeaserProps) => {
  const isPortrait = orientation === 'portrait';
  const clips = isPortrait ? portraitClips : landscapeClips;
  const totalFrames = 18 * 30;
  const clipDuration = Math.floor(totalFrames / clips.length);

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {clips.map((clip, index) => {
        const from = index * clipDuration;
        const duration = index === clips.length - 1 ? totalFrames - from : clipDuration;

        return (
          <Sequence key={clip.src} from={from} durationInFrames={duration}>
            <AbsoluteFill>
              <OffthreadVideo
                src={clip.src}
                muted
                endAt={duration}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <ClipOverlay caption={clip.caption} duration={duration} isPortrait={isPortrait} />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
