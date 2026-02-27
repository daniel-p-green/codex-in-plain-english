import {
  AbsoluteFill,
  Easing,
  OffthreadVideo,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
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
    title: 'Live course experience',
    detail: 'From landing page to first module in one flow.',
  },
  {
    src: moduleFlowDesktop,
    title: 'Readable module structure',
    detail: 'Sections, tips, and quiz checks with clear progress.',
  },
  {
    src: dashboardDesktop,
    title: 'Progress that motivates completion',
    detail: 'XP, unlocks, and dashboard momentum.',
  },
];

const portraitClips: Clip[] = [
  {
    src: landingToModuleMobile,
    title: 'Mobile-first course flow',
    detail: 'Quick start, clean reading rhythm, and clear actions.',
  },
  {
    src: moduleFlowMobile,
    title: 'Guided module interactions',
    detail: 'Read, mark complete, and validate understanding.',
  },
  {
    src: dashboardMobile,
    title: 'Progress in one view',
    detail: 'Track completion across modules and streaks.',
  },
];

const FADE_IN = 12;
const FADE_OUT = 10;
const SLIDE_IN = 24;

const ClipOverlay = ({
  title,
  detail,
  duration,
  isPortrait,
  isFinal,
  clipIndex,
  clipCount,
}: {
  title: string;
  detail: string;
  duration: number;
  isPortrait: boolean;
  isFinal: boolean;
  clipIndex: number;
  clipCount: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
  const slide = interpolate(frame, [0, SLIDE_IN], [22, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const tagOpacity = interpolate(frame, [0, Math.round(0.5 * fps)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 48%, rgba(0,0,0,0.58) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: isPortrait ? 30 : 44,
          top: isPortrait ? 30 : 34,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.24)',
          background: 'rgba(8, 10, 14, 0.7)',
          color: '#e8e8e8',
          fontSize: isPortrait ? 20 : 18,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          padding: isPortrait ? '8px 14px' : '8px 12px',
          opacity: tagOpacity,
          fontFamily:
            'OpenAI Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif',
        }}
      >
        {`Scene ${clipIndex + 1}/${clipCount}`}
      </div>
      <div
        style={{
          position: 'absolute',
          left: isPortrait ? 32 : 44,
          right: isPortrait ? 32 : 360,
          bottom: isPortrait ? 38 : 34,
          background: 'rgba(6, 8, 12, 0.76)',
          border: '1px solid rgba(255,255,255,0.24)',
          borderRadius: 16,
          padding: isPortrait ? '16px 18px' : '16px 20px',
          boxShadow: '0 12px 34px rgba(0, 0, 0, 0.45)',
          color: '#f4f4f5',
          display: 'grid',
          gap: isPortrait ? 8 : 7,
          lineHeight: 1.18,
          letterSpacing: '0.01em',
          transform: `translateY(${slide}px)`,
          fontFamily:
            'OpenAI Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica Neue, Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: isPortrait ? 38 : 44,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            lineHeight: 1.06,
            textShadow: '0 2px 12px rgba(0,0,0,0.36)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: isPortrait ? 22 : 24,
            fontWeight: 500,
            color: 'rgba(236, 242, 247, 0.96)',
            lineHeight: 1.22,
          }}
        >
          {detail}
        </div>
        {isFinal ? (
          <div
            style={{
              marginTop: isPortrait ? 2 : 4,
              fontSize: isPortrait ? 17 : 18,
              fontWeight: 500,
              color: 'rgba(186, 227, 255, 0.95)',
              letterSpacing: '-0.01em',
            }}
          >
            Adapted from Gabriel Chua&apos;s original post.
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

export const CourseTeaser = ({ orientation }: CourseTeaserProps) => {
  const isPortrait = orientation === 'portrait';
  const clips = isPortrait ? portraitClips : landscapeClips;
  const { durationInFrames } = useVideoConfig();
  const totalFrames = durationInFrames;
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
              <ClipOverlay
                title={clip.title}
                detail={clip.detail}
                duration={duration}
                isPortrait={isPortrait}
                isFinal={index === clips.length - 1}
                clipIndex={index}
                clipCount={clips.length}
              />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
