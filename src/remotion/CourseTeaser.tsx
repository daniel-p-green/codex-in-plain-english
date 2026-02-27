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
  title: string;
  detail: string;
};

const landscapeClips: Clip[] = [
  {
    src: landingToModuleDesktop,
    title: 'From landing to lesson',
    detail: 'Live product capture. No mockups.',
  },
  {
    src: moduleFlowDesktop,
    title: 'Quiz flow in module 1',
    detail: 'Sections, checkpoint, and knowledge check.',
  },
  {
    src: dashboardDesktop,
    title: 'XP dashboard and badges',
    detail: 'Adapted from Gabriel Chua’s original thread.',
  },
];

const portraitClips: Clip[] = [
  {
    src: landingToModuleMobile,
    title: 'Mobile course flow',
    detail: 'Quick start to first lesson.',
  },
  {
    src: moduleFlowMobile,
    title: 'Module interactions',
    detail: 'Read, mark complete, answer checks.',
  },
  {
    src: dashboardMobile,
    title: 'Progress in one view',
    detail: 'XP, modules, and streak momentum.',
  },
];

const FADE_IN = 10;
const FADE_OUT = 8;

const ClipOverlay = ({
  title,
  detail,
  duration,
  isPortrait,
}: {
  title: string;
  detail: string;
  duration: number;
  isPortrait: boolean;
}) => {
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
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.09) 55%, rgba(0,0,0,0.52) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: isPortrait ? 32 : 44,
          right: isPortrait ? 32 : 44,
          bottom: isPortrait ? 38 : 34,
          background: 'rgba(6, 6, 8, 0.78)',
          border: '1px solid rgba(255,255,255,0.22)',
          borderRadius: 16,
          padding: isPortrait ? '20px 22px' : '18px 22px',
          boxShadow: '0 12px 34px rgba(0, 0, 0, 0.45)',
          color: '#f4f4f5',
          display: 'grid',
          gap: isPortrait ? 10 : 8,
          lineHeight: 1.18,
          letterSpacing: '0.01em',
          fontFamily:
            'OpenAI Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: isPortrait ? 52 : 56,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            textShadow: '0 3px 16px rgba(0,0,0,0.34)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: isPortrait ? 31 : 33,
            fontWeight: 500,
            color: 'rgba(236, 242, 247, 0.96)',
            lineHeight: 1.24,
          }}
        >
          {detail}
        </div>
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
              <ClipOverlay title={clip.title} detail={clip.detail} duration={duration} isPortrait={isPortrait} />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
