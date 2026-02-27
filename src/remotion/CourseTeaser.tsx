import { AbsoluteFill, Easing, OffthreadVideo, Sequence, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

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
};

const CROSSFADE = 14;
const OPEN_FADE = 16;
const CLOSE_FADE = 18;

const landscapeClips: Clip[] = [
  { src: landingToModuleDesktop },
  { src: moduleFlowDesktop },
  { src: dashboardDesktop },
];

const portraitClips: Clip[] = [
  { src: landingToModuleMobile },
  { src: moduleFlowMobile },
  { src: dashboardMobile },
];

const ClipScene = ({
  clip,
  duration,
  isFirst,
  isLast,
  isPortrait,
}: {
  clip: Clip;
  duration: number;
  isFirst: boolean;
  isLast: boolean;
  isPortrait: boolean;
}) => {
  const frame = useCurrentFrame();

  const enterOpacity = isFirst
    ? interpolate(frame, [0, OPEN_FADE], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic),
      })
    : interpolate(frame, [0, CROSSFADE], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic),
      });

  const exitOpacity = isLast
    ? interpolate(frame, [duration - CLOSE_FADE, duration], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.in(Easing.cubic),
      })
    : interpolate(frame, [duration - CROSSFADE, duration], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.in(Easing.cubic),
      });

  const opacity = Math.min(enterOpacity, exitOpacity);

  const scale = interpolate(frame, [0, duration], [1.008, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });

  const driftY = interpolate(frame, [0, duration], [isPortrait ? 2 : 1, isPortrait ? -1 : -0.5], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.quad),
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo
        src={clip.src}
        muted
        endAt={duration}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `translate3d(0, ${driftY}px, 0) scale(${scale})`,
          transformOrigin: '50% 50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.22) 100%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};

export const CourseTeaser = ({ orientation }: CourseTeaserProps) => {
  const isPortrait = orientation === 'portrait';
  const clips = isPortrait ? portraitClips : landscapeClips;
  const { durationInFrames } = useVideoConfig();

  const totalFrames = durationInFrames;
  const sceneDuration = Math.floor((totalFrames + CROSSFADE * (clips.length - 1)) / clips.length);
  const sceneStep = sceneDuration - CROSSFADE;

  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {clips.map((clip, index) => {
        const isFirst = index === 0;
        const isLast = index === clips.length - 1;
        const from = index * sceneStep;
        const duration = isLast ? totalFrames - from : sceneDuration;

        return (
          <Sequence key={`${clip.src}-${index}`} from={from} durationInFrames={duration}>
            <ClipScene clip={clip} duration={duration} isFirst={isFirst} isLast={isLast} isPortrait={isPortrait} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
